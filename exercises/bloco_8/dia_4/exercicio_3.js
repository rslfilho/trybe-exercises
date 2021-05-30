const assert = require('assert');
const books = require('./books');

const expectedResult = 43;

const averageAge = () => books.map((book) => book.releaseYear - book.author.birthYear).reduce((acc, curr) => acc + curr) / books.length;

assert.strictEqual(averageAge(), expectedResult);