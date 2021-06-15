const { test, describe, expect, it } = require('@jest/globals');

const {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
} = require('./playground_1');

const {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
} = require('./playground_2');

describe('Testando funções encode e decode', () => {
  test('Testando se ambas são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  test('Testando retorno de aeiou na função encode', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  test('Testando retorno de 12345 na função decode', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  test('Testando se outras letras não são convertidas em ambas as funções', () => {
    expect(encode('chjgdtyrlkr')).toBe('chjgdtyrlkr');
    expect(decode('chjgdtyrlkr')).toBe('chjgdtyrlkr');
  });
  test('Se a string retornada tem o mesmo número de caracteres que a string parâmetro', () => {
    expect(encode('casinha').length).toBe('casinha'.length);
    expect(decode('casinha').length).toBe('casinha'.length);
  });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});