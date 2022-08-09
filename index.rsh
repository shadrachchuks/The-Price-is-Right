'reach 0.1';

const [isGuessedPrice, HIGH, MEDIUM, LOW ] = makeEnum(3);
const [isResults, ALICE_WIN, DRAW, BOB_WINS ] = makeEnum(3);


const winner = (guessAlice, guessBob) => ((guessAlice + ( 4 - guessBob)) % 3);

assert(winner(HIGH, LOW) == ALICE_WIN);
assert(winner(LOW, HIGH) == BOB_WINS);
assert(winner(HIGH, HIGH) == DRAW);

//we create a loop that will ensure that the value in winner is the ultimate outcome.
forall(UInt, guessAlice =>
  forall(UInt, guessBob =>
    assert(isResults(winner(guessAlice, guessBob)))));

forall(UInt, (guessedPrice) => assert(winner(isResult(winner(guessAlice, guessBob)))));

//dual functions performed by all paticipants...............
const Deal = {
  ...hasRandom,
  guessedPrice: Fun([], UInt ),
  seeResult: Fun([UInt], Null),
}

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
   ...Deal,
   wager: UInt,
  //  deadline: UInt,
  });

  const Bob = Participant('Bob', {
    ...Deal,
    acceptWager: Fun([UInt], Null)
  });
  init();

// The first one to publish deploys the contract
Alice.only(() => {
  const wager = declassify(interact.wager)
  const _guessAlice = interact.guessedPrice();
  const [_commitAlice, _saltAlice] = makeCommitment(interact, _guessAlice);
  const commitAlice = declassify(_commitAlice);
})
Alice.publish(wager, commitAlice).pay(wager);
commit();

//Here we hiding the price picked by Alice from Bob before he publishes his guessed price
// unknowable(Bob, Alice(guessAlice));


// The second one to publish always attaches
Bob.only(() => {
  interact.acceptWager(wager);
  const guessBob = declassify(interact.guessedPrice());
})
  Bob.publish(guessBob).pay(wager)

const result = (guessAlice + (4 - guessBob)) % 3;
//based on our verifyArithmetic (result) we check if we have a draw or a winner.
const aliceWin = [2, 0];
const bobWin = [0, 2];
const draw = [1, 1];

const [forAlice, forBob] = result == 2 ? aliceWin : result == 0 ? bobWin : draw;

transfer(forAlice * wager).to(Alice);
transfer(forBob  * wager).to(Bob);

commit();

//There each paticpate see the outcome of the steps that take.
each([Alice, Bob], () => {
    interact.seeResult(result);
});

  exit();
});