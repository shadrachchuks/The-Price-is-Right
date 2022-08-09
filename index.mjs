import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accAlice, accBob ] = await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');

//formatting the currency to a 4 decemal place...........
const fmt = (x) => stdlib.formatCurrency(x, 4);

const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

//Getting the balace before the game starts for alice and bob
const AliceBeforeBalance = await getBalance(accAlice);
const BobBeforeBalance = await getBalance(accBob);


console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const GUESSEDPRICE = ['High', 'Medium', 'Low'];
const RESULT = ['Alice wins', 'Draw', 'Bob wins'];



const Deal = (Who) => ({
  ...stdlib.hasRandom,
    guessedPrice: () => {
      const guessedPrice =  Math.floor(Math.random() * 3);
      console.log(`${Who} guessed ${GUESSEDPRICE[guessedPrice]}`)
      return guessedPrice;
    },
    seeResult: (result) => {
    console.log(`${Who} saw the ${RESULT[result]}`)
}

});

console.log('Starting backends...');

await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    // implement Alice's interact object here
    ...Deal('Alice'),
     wager: stdlib.parseCurrency(5),
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    // implement Bob's interact object here
    ...Deal('Bob'),
    acceptWager:  (amt) => {
      console.log(`Bob accepts the ${fmt(amt)}`)
    }
  }),
]);

//getting the balance of bob and alice after wager has been placed.
const afteAclice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);

//remitting funds after the winner has been decalred 

console.log(`Alice moved from ${AliceBeforeBalance} to ${afteAclice}`)
console.log(`Bob moved from ${BobBeforeBalance} to ${afterBob}`)



console.log('Goodbye, Alice and Bob!');