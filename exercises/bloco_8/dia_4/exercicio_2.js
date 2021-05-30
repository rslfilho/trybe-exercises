const assert = require('assert');
const books = require('./books');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = () => books
  .reduce((acc, book) => acc.concat(book.author.name), [])
  .join(', ') + '.';

assert.strictEqual(reduceNames(), expectedResult);