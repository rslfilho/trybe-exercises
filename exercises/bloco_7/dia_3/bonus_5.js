// Acabei fazendo com as exeções como pedia o repositório. Para ficar retornando false como pede o exercício no Course basta trocar os throw Error(...) por return false.

const assert = require('assert');

const numberCounter = (word) => {
  let char;
  let numberCounter = 0;
  for (let index = 0; index < word.length; index += 1) {
    char = word.charAt(index);
    if (!isNaN(char * 1)) numberCounter += 1;
  }

  return numberCounter;
}

const lowerCaseCounter = (word) => {
  let char;
  let lowerCaseCounter = 0;
  for (let index = 0; index < word.length; index += 1) {
    char = word.charAt(index);
    if (isNaN(char * 1)) {
      if (char == char.toLowerCase()) lowerCaseCounter += 1;
    }
  }

  return lowerCaseCounter;
}

const upperCaseCounter = (word) => {
  let char;
  let upperCaseCounter = 0;
  for (let index = 0; index < word.length; index += 1) {
    char = word.charAt(index);
    if (isNaN(char * 1)) {
      if (char == char.toUpperCase()) upperCaseCounter += 1;
    }
  }

  return upperCaseCounter;
}

const Verify = (password) => {
  if (password == null) throw Error('Password should not be null');
  if (password.length <= 8) throw Error('Password should be larger than 8 chars');
  if (upperCaseCounter(password) === 0) throw Error('Password should have one uppercase letter at least');
  if (lowerCaseCounter(password) === 0) throw Error('Password should have one lowercase letter at least');
  if (numberCounter(password) === 0) throw Error('Password should have one number at least');

  return true;
}


assert.throws(() => {
  Verify('calo');
}, /^Error: Password should be larger than 8 chars$/);

assert.throws(() => {
  Verify(null);
}, /^Error: Password should not be null$/);

assert.throws(() => {
  Verify('mainhouse');
}, /^Error: Password should have one uppercase letter at least$/);

assert.throws(() => {
  Verify('123ASDDER');
}, /^Error: Password should have one lowercase letter at least$/);

assert.throws(() => {
  Verify('CabeCadePilao');
}, /^Error: Password should have one number at least$/);