const upperCase = (str) => str.toUpperCase();

console.log(typeof upperCase('teste'));

const firstLetter = (str) => str[0];

const concatTwoStrings = (strOne, strTwo) => strOne + strTwo;

module.exports = {
  upperCase,
  firstLetter,
  concatTwoStrings,
};