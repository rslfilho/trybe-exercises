// Questão 01
function isPalindrome(word) {
  let counterDiff = 0;

  for (let index = 0; index < word.length; index += 1) {
    if (word[index] !== word[word.length - index - 1]) {
      counterDiff += 1;
    };
  };

  if (counterDiff === 0) {
    return true;
  }
  else {
    return false;
  };
};

console.log(isPalindrome("arara"));

// Questão 02
function posicaoMaior(array) {
  let posicao;
  let maior = array[0];

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
      posicao = index;
    };
  };

  return posicao;
};

console.log(posicaoMaior([2, 3, 6, 7, 10, 1]));

// Questão 03
function posicaoMenor(array) {
  let posicao;
  let menor = array[0];

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] < menor) {
      menor = array[index];
      posicao = index;
    };
  };

  return posicao;
};

console.log(posicaoMenor([2, 4, 6, 7, 10, 0, -3]));

// Questão 04
function posicaoMaisCaracteres(array) {
  let maior = array[0];
  let posicao;

  for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > maior.length) {
      maior = array[index];
      posicao = index;
    };
  };

  return array[posicao];
};

console.log(posicaoMaisCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Questão 05
function repeteMais(array) {
  let counter = [];

  for (let indexChecar = 0; indexChecar < array.length; indexChecar += 1) {
    counter[indexChecar] = 0;
    for (let indexRepete = 0; indexRepete < array.length; indexRepete += 1) {
      if (array[indexChecar] === array[indexRepete]) {
        counter[indexChecar] += 1;
      };
    };
  };

  let maisRepete = counter[0];
  let posicao = 0;

  for (let indexPosicao = 1; indexPosicao < array.length; indexPosicao += 1) {
    if (counter[indexPosicao] > maisRepete) {
      maisRepete = counter[indexPosicao];
      posicao = indexPosicao;
    };
  };

  return array[posicao];
};

console.log(repeteMais([2, 3, 2, 5, 8, 2, 3]));

// Questão 06
function somaTodos(num) {
  let result = 0;

  for (let index = 1; index <= num; index += 1) {
    result += index;
  };

  return result;
};

console.log(somaTodos(5));

// Questão 07
function verificaFimPalavra(word, ending) {
  let diferenca = word.length - ending.length;
  let counter = 0;

  for (let index = ending.length - 1; index > 0; index -= 1) {
    if (ending[index] !== word[index + diferenca]) {
      counter += 1;
    };
  };

  if (counter === 0) {
    return true;
  }
  else {
    return false;
  };
};

console.log(verificaFimPalavra('trybe', 'be'));