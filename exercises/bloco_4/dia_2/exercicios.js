// Array de referência

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Questão 01
console.log('Questão 01:');
console.log('');

for (number of numbers) {
  console.log(number);
};

// Questão 02
console.log('')
console.log('Questão 02:');
console.log('');

let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
};

console.log(sum);

// Questão 03
console.log('')
console.log('Questão 03:');
console.log('');

let media = sum / numbers.length;

console.log(media);

// Questão 04
console.log('')
console.log('Questão 04:');
console.log('');

if (media > 20) {
  console.log('Valor maior que 20');
}
else {
  console.log('Valor menor ou igual a 20');
};

// Questão 05
console.log('')
console.log('Questão 05:');
console.log('');

let maior = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  };
};

console.log(maior);

// Questão 06
console.log('')
console.log('Questão 06:');
console.log('');

let quantidadeImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 != 0) {
    quantidadeImpares += 1;
  };
};

if (quantidadeImpares == 0) {
  console.log('Nenhum valor ímpar encontrado');
}
else {
  console.log(quantidadeImpares);
};

// Questão 07
console.log('')
console.log('Questão 07:');
console.log('');

let menor = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < menor) {
    menor = numbers[index];
  };
};

console.log(menor);

// Questão 08
console.log('')
console.log('Questão 08:');
console.log('');

let array = [];

for (let index = 1; index <= 25; index += 1) {
  array.push(index);
};

console.log(array);

// Questão 09
console.log('')
console.log('Questão 09:');
console.log('');

for (let index =0; index < array.length; index += 1) {
  console.log(array[index] / 2);
}