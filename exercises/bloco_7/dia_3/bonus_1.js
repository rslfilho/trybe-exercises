const assert = require('assert');

// retorna o valor das moedas que são devolvidas

const getChange = (payable, paid) => {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  // escreva seu código aqui...

  if (remaining < 0) throw Error('paid value is not enough');

  for (let index = 0; index < coins.length; index += 1) {
    if (parseInt(remaining / coins[index], 10) > 0) {
      change.push(coins[index]);
      remaining -= coins[index];
      index -= 1;
    }
  }

  return change;
}

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected); // OK

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected); // OK

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected); // OK

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected); // OK

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/); // OK