const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const  containsA = () => names
  .reduce((acc, curr) => acc + curr.split('')
    .filter((char) => char.toLowerCase() === 'a').length, 0)

assert.deepStrictEqual(containsA(), 20);

// Solução sem reduce

console.log(
  names
  .join()
  .split('')
  .filter((char) => char.toLowerCase() === 'a')
  .length
)