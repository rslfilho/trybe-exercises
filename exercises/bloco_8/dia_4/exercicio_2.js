const assert = require('assert');
const books = require('./books');

const expectedResult = 43;

const averageAge = () => books.reduce((acc, book) => acc.concat(book.author.name), []).join(', ')

console.log(averageAge())
// assert.strictEqual(averageAge(), expectedResult);