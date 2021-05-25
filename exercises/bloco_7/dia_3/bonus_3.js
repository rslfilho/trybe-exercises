const assert = require('assert');
// escreva a função removeMiddle aqui

const removeMiddle = (array) => {
  const middleIndex = Math.floor(array.length / 2);

  const removed = array.splice(middleIndex, 1);

  return removed;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);