'reach 0.1';


const [isNumber, ONE, TWO, THREE] = makeEnum(3);
const [isResults, ALICE_WIN, DRAW, BOB_WINS] =makeEnum(3);

//dual functions performed by all paticipants.
const Deal = {
  ...hasRandom,
  Number: Fun([], UInt ),
  seeOutcome: Fun([], UInt),
  informTImeOut: Fun([], UInt),
  informDraw: Fun([], UInt),
}


export const main = Reach.App(() => {

  const Alice = Participant('Alice', {
   ...Deal,
   price: UInt,
   deadline: UInt,
  });
  
  const Bob = Participant('Bob', {
    ...Deal,
    acceptPrice: Fun([UInt], null),
  });
  init();

  // The first one to publish deploys the contract
Alice.only(() => {
  const price = declassify(interact.price);
  const deadline = declassify(interact.deadline);
})
Alice.publish(wager, deadline);
commit();


  // The second one to publish always attaches
Bob.only(() => {
  interact.acceptPrice(price);
})
  Bob.publish();
  commit();
  // write your program here
  exit();
});
