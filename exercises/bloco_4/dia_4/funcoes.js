// Adição

function sum(a,b) {
  return a + b;
};

console.log(sum(10,20));

// Subtração

function sub(a,b) {
  return a - b;
};

console.log(sub(20,10));

// Multiplicação

function mult(a,b) {
  return a * b;
};

console.log(mult(10,20));

// Divisão

function div(a,b) {
  return a / b;
};

console.log(div(20,10));

// Módulo (resto)

function mod(a,b) {
  return a % b;
};

console.log(mod(10,2))

// Maior de 02 números

function maior(a,b) {
  let maior;

  if (a > b) {
    maior = a;
  }
  else {
    maior = b;
  };

  return maior;
};

console.log(maior(13,11));

// Maior de 03 números

function maiorDeTres(a,b,c) {
  let maior;

  if (a > b && a > c) {
    maior = a;
  }
  else if (b > c) {
    maior = b;
  }
  else {
    maior = c;
  };

  return maior;
};

console.log(maiorDeTres(10,20,30));

// Verifica se Positivo ou Negativo

function positiveNegative(a) {
  let resultado;

  if (a === 0) {
    resultado = 'Erro - valor igual a zero'
  }
  else if (a > 0) {
    resultado = 'Positive';
  }
  else {
    resultado = 'Negative';
  };

  return resultado;
};

console.log(positiveNegative(10));

// Ângulos de um Triângulo

function angulosTriangulo(a,b,c) {
  let resultado;

  if (a <= 0 || b <= 0 || c <= 0) {
    resultado = 'Erro - Um ou mais ângulos têm valor inválido.';
  }
  else if (a + b + c === 180) {
    resultado = true;
  }
  else {
    resultado = false;
  };

  return resultado;
};

console.log(angulosTriangulo(60,60,60));

// Peças de Xadrez

function movimentosXadrez(peca) {
  let resultado;

  switch(peca.toLowerCase()) {
    case 'rei':
        resultado = 'O Rei pode se movimentar na diagonal, na horizontal e na vertical, andando apenas umaa casa.';
        break;
    case 'rainha':
        resultado = 'A Rainha pode se movimentar na diagonal, na horizontal e na vertical, andando quantas casas quiser, mas não pode pular outras peças.';
        break;
    case 'bispo':
        resultado = 'O Bispo pode se movimentar na diagonal, andando quantas casas quiser, mas não pode pular outras peças.';
        break;
    case 'cavalo':
        resultado = 'O Cavalo pode se movimentar em sentido de "L", duas casas na horizontal e mais uma na vertical, ou vice-versa. É o único que pode pular outras peças';
        break;
    case 'torre':
        resultado = 'A Torre pode se movimentar na horizontal ou na vertical, andando quantas casas quiser, mas não pode pular outras peças.';
        break;
    case 'peao':
        resultado = 'Peão pode se movimentar apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo';
        break;
    default:
        resultado = 'Erro - A peça informada não é válida!';
  };

  return resultado;
};

console.log(movimentosXadrez('Rainha'));

// Conversão de nota

function scoreConvertion(score) {
  let resultado;

  if (score < 0 || score > 100) {
    resultado = 'Erro - Nota inválida.';
    }
    else if (score >= 90) {
        resultado = 'A';
    }
    else if (score >= 80) {
        resultado = 'B';
    }
    else if (score >= 70) {
        resultado = 'C';
    }
    else if (score >= 60) {
        resultado = 'D';
    }
    else if (score >= 50) {
        resultado = 'E';
    }
    else if (score < 50) {
        resultado = 'F';
    };

  return resultado;
};

console.log(scoreConvertion(95));

// Verifica se é par

function oneEven(a,b,c) {
  let resultado;

  if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    resultado = true;
  }
  else {
    resultado = false;
  };

  return resultado;
};

console.log(oneEven(1,5,3));

// Verifica se é ímpar

function oneOdd(a,b,c) {
  let resultado;

  if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !==0) {
    resultado = true;
  }
  else {
    resultado = false;
  };

  return resultado;
};

console.log(oneOdd(0,2,4));

// Calcular Lucro em mil vendas

function lucro(custoProduto, valorVenda) {
  let impostoCusto = custoProduto * 0.2;
  let custoTotal = custoProduto + impostoCusto;
  let lucro = valorVenda - custoTotal;
  let resultado

  if(custoProduto < 0 || valorVenda < 0) {
    resultado = 'Erro - Um dos valores está inválido.';
  }
  else {
    resultado = lucro * 1000;
  };

  return resultado;
};

console.log(lucro(10, 15));

// Valor do salário líquido

function salarioLiquido(salarioBruto) {
  let descontoInss;

  if(salarioBruto <= 1556.94) {
    descontoInss = salarioBruto * 0.08;
  }
  else if(salarioBruto <= 2594.92) {
    descontoInss = salarioBruto * 0.09;
  }
  else if(salarioBruto <= 5189.82) {
    descontoInss = salarioBruto * 0.11;
  }
  else {
    descontoInss = 570.88;
  }

  let salarioBase = salarioBruto - descontoInss;

  let descontoIrpf;
  let parcelaIrpf;

  if(salarioBase <= 1903.98) {
    descontoIrpf = 0
    parcelaIrpf = 0;
  }
  else if(salarioBase <= 2826.65) {
    descontoIrpf = salarioBase * 0.075;
    parcelaIrpf = 142.80;
  }
  else if(salarioBase <= 3751.05) {
    descontoIrpf = salarioBase * 0.15;
    parcelaIrpf = 354.80;
  }
  else if(salarioBase <= 4664.68) {
    descontoIrpf = salarioBase * 0.225;
    parcelaIrpf = 636.13;
  }
  else {
    descontoIrpf = salarioBase * 0.275;
    parcelaIrpf = 869.36;
  }

  let resultado = salarioBase - (descontoIrpf - parcelaIrpf)

  return resultado;
};

console.log(salarioLiquido(3000));