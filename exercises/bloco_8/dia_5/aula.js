// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Maçã', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Melancia', 'Laranja', 'Morango'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

// console.log(fruitSalad(specialFruit, additionalItens));

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [ parameter, func ] = saudacoes;

// func(parameter);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const array = ['gato', 'água', 'arroz'];

[ animal, bebida, comida ] = array;

// console.log(comida, animal, bebida)

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[ ,,, ...numerosPares ] = numerosPares;

// // console.log(numerosPares);

// let person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// let { nationality = 'Brazilian' } = person;

// console.log(nationality)

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

// console.log(getPosition(-19.8157, -43.9542));

const greeting = (user) => console.log(`Welcome ${user}!`);

// greeting(); // Welcome undefined!

const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

// console.log(multiply(8));