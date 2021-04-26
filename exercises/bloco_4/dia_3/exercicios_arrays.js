// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

console.log('');
console.log('Questão 01');
console.log(''); 

let n = 5;
let array = [];

if (n > 1) {
  for (let index = 0; index < n; index += 1) {
    array.push('*');
  }
  
  for (let index2 = 0; index2 < n; index2 += 1) {
    console.log(array);
  }
}
else {
  console.log('Erro - N precisa ser maior que 1');
};

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

console.log('');
console.log('Questão 02');
console.log('');

n = 5;
array = [];

if (n > 1) {
  for (let index = 0; index < n; index += 1) {
    array.push('*');
    console.log(array)
  }
}
else {
  console.log('Erro - N precisa ser maior que 1');
};

// Agora inverta o lado do triângulo. Por exemplo:

console.log('');
console.log('Questão 03');
console.log('');

n = 5;
array = [];

if (n > 1) {
  for (let index = 0; index < n; index += 1) {
    array.push(' ');
  }

  for (let index2 = n - 1; index2 >= 0; index2 -= 1) {
    array[index2] = '*';
    console.log(array);
  }
}
else {
  console.log('Erro - N precisa ser maior que 1');
};

// 4- Depois, faça uma pirâmide com n asteriscos de base:

console.log('');
console.log('Questão 04');
console.log('');

n = 5;
array = [];

if (n > 1 && n % 2 != 0) {
  for (let index = 0; index < n; index += 1) {
    array.push(' ');
  }

  array[Math.floor(n / 2)] = '*';
  console.log(array);

  for (let index2 = 1; index2 < n / 2; index2 += 1) {
    array[Math.floor(n / 2 - index2)] = '*';
    array[Math.floor(n / 2 + index2)] = '*';
    console.log(array);
  }
}
else {
  console.log('Erro - N precisa ser maior que 1 e ímpar');
};

//5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

console.log('');
console.log('Questão Bônus 05');
console.log('');

