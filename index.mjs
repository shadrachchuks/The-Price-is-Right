import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accAlice, accBob ] = await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const PRICE = ['High', 'Medium', 'Low'];
const RESULT = ['Alice wins', 'Draw', 'Bob wins'];



const Deal = (Who) => ({
    pickedPrice: () => {
      const pickedPrice =  Math.floor(Math.random() * 3);
      console.log(`${Who} guessed ${PRICE[pickedPrice]}`)
      return pickedPrice;
    },
    seeOutcome: (result) => {
    console.log(`${Who}  saw the ${RESULT[result]})`)
}

});

console.log('Starting backends...');

await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    // implement Alice's interact object here
    ...Deal('Alice'),
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    // implement Bob's interact object here
    ...Deal('Bob'),
  }),
]);

console.log('Goodbye, Alice and Bob!');
