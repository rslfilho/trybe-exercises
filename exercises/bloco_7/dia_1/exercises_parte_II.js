// Exercício 01

const fatorial = number => {
  let result = 1;
  
  for (let index = 01; index <= number; index += 1) {
    result *= index;
  }

  return result;
}

console.log(fatorial(0));

// Bonus
const fatorialRecursiva = number => number > 1 ? number * fatorialRecursiva(number - 1) : 1;

console.log(fatorialRecursiva(4));

// Exercício 02

const longestWord = (setence) => {
  const splittedStence = setence.split(' ');
  let longest = splittedStence[0];

  for (let index = 1; index < splittedStence.length; index += 1) {
    if (longest.length < splittedStence[index].length) longest = splittedStence[index];
  }
  return longest;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

// Exercício  03

