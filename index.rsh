'reach 0.1';

const [isGuessedPrice, HIGH, MEDIUM, LOW ] = makeEnum(3);
const [isResults, ALICE_WIN, DRAW, BOB_WINS ] = makeEnum(3);


const winner = (guessAlice, guessBob) => ((guessAlice + ( 4 - guessBob)) % 3);

assert(winner(HIGH, MEDIUM) == ALICE_WIN);
assert(winner(MEDIUM, HIGH) == BOB_WINS);
assert(winner(HIGH, HIGH) == DRAW);

//we create a loop that will ensure that the value in winner is the ultimate outcome.
forall(UInt, guessAlice => forall(UInt, guessBob => assert(isResults(winner(guessAlice, guessBob)))));

forall(UInt, (guessedPrice) => assert(winner(guessedPrice, guessedPrice) == DRAW));

//dual functions performed by all paticipants...............
const Deal = {
  ...hasRandom,
  guessedPrice: Fun([], UInt ),
  seeResult: Fun([UInt], Null),
  informTimeout: Fun([], Null)
}

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
   ...Deal,
   wager: UInt,
   deadline: UInt,
  });

  const Bob = Participant('Bob', {
    ...Deal,
    acceptWager: Fun([UInt], Null)
  });
  init();

//Informing each paticipate of a timeout in progam

const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
  })
}

// The first one to publish deploys the contract
Alice.only(() => {
  const wager = declassify(interact.wager)
  const _guessAlice = interact.guessedPrice();
  const [_commitAlice, _saltAlice] = makeCommitment(interact, _guessAlice);
  const commitAlice = declassify(_commitAlice);
  const deadline = declassify(interact.deadline);
})
Alice.publish(wager, commitAlice, deadline).pay(wager);
commit();

//Here we hiding the price picked by Alice from Bob before he publishes his guessed price

unknowable(Bob, Alice(_guessAlice, _saltAlice));
// The second one to publish always attaches
Bob.only(() => {
  interact.acceptWager(wager);
  const guessBob = declassify(interact.guessedPrice());
})
  Bob.publish(guessBob)
    .pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
  commit();

//here we make Alice publish her guess so it becomes public after bob has accepted the wager and publish his guess
Alice.only(() => {
  const saltAlice = declassify(_saltAlice);
  const guessAlice = declassify(_guessAlice);
});

Alice.publish(saltAlice, guessAlice)
.timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
checkCommitment(commitAlice, saltAlice, guessAlice);

const result = (guessAlice + (4 - guessBob)) % 3;
//based on our verifyArithmetic (result) we check if we have a draw or a winner.
const aliceWin = [2, 0];
const bobWin = [0, 2];
const draw = [1, 1];

const [forAlice, forBob] = result == ALICE_WIN ? aliceWin : result == BOB_WINS ? bobWin : draw;

transfer(forAlice * wager).to(Alice);
transfer(forBob  * wager).to(Bob);
commit();

//There each paticpate see the outcome of the steps that take.
each([Alice, Bob], () => {
    interact.seeResult(result);
});
  exit();
});