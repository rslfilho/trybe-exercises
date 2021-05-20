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

// Exercício  04
// 4.1

const changeX = (string) => {
  const parameter = 'Roberval';
  const splittedString = string.split('x');
  let result = '';

  for (let index = 0; index < splittedString.length; index += 1) {
    if (index < splittedString.length - 1) result += splittedString[index] + parameter;
    if (index === splittedString.length - 1) result += splittedString[index];
  }
  
  return result;
}

// console.log(changeX(`Tryber x aqui!`))

// 4.2

const skills = ['Capacidade de Aprender', 'Organização', 'Css', 'JavaScript', 'HTML'];

// 4.3

const completeString = (string) => {
  const sorttedSkills = skills.sort();

  return `${string} Minhas cinco principais habilidades são ${sorttedSkills}`
}

console.log(completeString(changeX('Tryber x aqui!')));