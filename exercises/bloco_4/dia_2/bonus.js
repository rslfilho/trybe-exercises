// Questão 01
console.log('')
console.log('Questão 01:');
console.log('');

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
     numbers[index] = numbers[secondIndex];
     numbers[secondIndex] = position;
    };
  };
};

console.log(numbers);

// Questão 02
console.log('')
console.log('Questão 02:');
console.log('');

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
     numbers[index] = numbers[secondIndex];
     numbers[secondIndex] = position;
    };
  };
};

console.log(numbers);

// Questão 03
console.log('')
console.log('Questão 03:');
console.log('');

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index +1 < numbers.length) {
    newNumbers.push(numbers[index] * numbers[index + 1]);
  }
  else {
    newNumbers.push(numbers[index] * 2);
  };
};

console.log(newNumbers);