'reach 0.1';


const [isPrice, HIGH, MEDIUM, LOW] = makeEnum(3);
const [isResults, ALICE_WIN, DRAW, BOB_WINS] = makeEnum(3);

//dual functions performed by all paticipants.
const Deal = {
  ...hasRandom,
  pickedPrice: Fun([], UInt ),
  result: Fun([], UInt),
  // informTImeOut: Fun([], UInt),
  // informDraw: Fun([], UInt),
}

export const main = Reach.App(() => {

  const Alice = Participant('Alice', {
   ...Deal,
   wager: UInt,
   deadline: UInt,
  });

  const Bob = Participant('Bob', {
    ...Deal,
    //acceptPrice: Fun([UInt], null),
  });
  init();

  // The first one to publish deploys the contract
Alice.only(() => {
  const PriceAlice = declassify(interact.pickedPrice());
  // const price = declassify(interact.price);
  // const deadline = declassify(interact.deadline);
})
Alice.publish(PriceAlice);
commit();


  // The second one to publish always attaches
Bob.only(() => {
  const PriceBob = declassify(interact.pickedPrice());
})
  Bob.publish(PriceBob);
commit();
  // write your program here
  exit();
});
