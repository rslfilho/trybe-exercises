const assert = require('assert');
const books = require('./books');

const expectedResult = 'As Crônicas de Gelo e Fogo';

const longestNamedBook = () => books.reduce((acc, curr) => curr.name.length > acc.length ? curr.name : acc, '')

assert.deepStrictEqual(longestNamedBook(), expectedResult);