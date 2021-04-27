// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

console.log('');
console.log('Questão 01');
console.log(''); 

let n = 5;
let linha = '';

if (n > 1) {
  for (let index = 0; index < n; index += 1) {
    linha += '*';
  }
  
  for (let index2 = 0; index2 < n; index2 += 1) {
    console.log(linha);
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
linha = '';
acrescimo = '*';

if (n > 1) {
  for (let index = 0; index < n; index += 1) {
    linha += acrescimo;
    console.log(linha);
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

if (n > 1) {
  for (let index = 0; index < n; index += 1) {
    linha = '';
    for (index2 = 0; index2 < n; index2 += 1) {
      if (index2 < (n-1) - index) {
        linha += ' ';
      }
      else {
        linha += '*';
      }; 
    };
    console.log(linha);
  };
}
else {
  console.log('Erro - N precisa ser maior que 1');
};

// 4- Depois, faça uma pirâmide com n asteriscos de base:

console.log('');
console.log('Questão 04');
console.log('');

n = 5;
linha = '';
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

if (n > 1 && n % 2 != 0) {
  for (let index = 0; index <= meio; index += 1) {
    for (let index2 = 0; index2 <= n; index2 += 1) {
      if (index2 > esquerda && index2 < direita) {
        linha += '*';
      }
      else {
        linha += ' ';
      }
    }
    console.log(linha);
    linha = '';
    esquerda -= 1;
    direita += 1;
  }
}
else {
  console.log('Erro - N precisa ser maior que 1 e ímpar');
};

// //5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

console.log('');
console.log('Questão Bônus 05');
console.log('');

n = 7;
linha = '';
meio = (n + 1) / 2;
esquerda = meio;
direita = meio;

if (n > 1 && n % 2 != 0) {
  for (let index = 0; index < meio; index += 1) {
    for (let index2 = 0; index2 < n; index2 += 1) {
      if (index2 == esquerda - 1 || index2 == direita -1 || index == meio - 1) {
        linha += '*';
      }
      else {
        linha += ' ';
      };
    };
    console.log(linha);
    linha = '';
    esquerda -= 1;
    direita += 1;
  };
}
else {
  console.log('Erro - N precisa ser maior que 1 e ímpar');
};

// 6- Faça um programa que diz se um número definido numa variável é primo ou não.

console.log('');
console.log('Questão Bônus 06');
console.log('');

let number = 11;
let isDivisible = [];

for (let index = 1; index <= number; index += 1) {
  if (number % index == 0) {
    isDivisible.push(index);
  };
};

if (isDivisible.length == 2 && isDivisible[0] == 1 && isDivisible[1] == number) {
  console.log(`O número ${number} é primo`);
}
else {
  console.log(`O número ${number} não é primo`);
};