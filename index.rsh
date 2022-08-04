'reach 0.1';

const Deal = {
  ...hasRandon,
  pickNumber: Fun([], UInt ),
  displayResult: Fun([], UInt),
  informTImeOut: Fun([], UInt),
  informDraw: Fun([], UInt),
}


export const main = Reach.App(() => {
  const A = Participant('Alice', {
   ...Deal,
   stake: UInt,
   deadline: UInt,
  });
  const B = Participant('Bob', {
    ...Deal,
    acceptStake: Fun([UInt], null),
  });
  init();

  // The first one to publish deploys the contract
  A.publish();
  commit();


  // The second one to publish always attaches
  B.publish();
  commit();
  // write your program here
  exit();
});
