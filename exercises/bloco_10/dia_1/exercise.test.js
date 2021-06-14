const { test, describe, expect, it } = require('@jest/globals');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('Testando função sum()', () => {
  test('Soma de 02 valores', () => {
    expect(sum(2, 3)).toEqual(5);
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('Erro nos parâmetros', () => {
    expect(() => {sum(4, '5')}).toThrow();
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  });
});

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

describe('Testando função myRemove()', () => {
  test('Se retorna ou não o esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  it('Se o parâmetro não sofreu alterações', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 3);
    expect(arr).toEqual([1, 2, 3, 4]);
  })
});

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

describe('Testando função myRemoveWithoutCopy()', () => {
  test('Se retorna ou não o esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  it('Se o parâmetro não sofreu alterações', () => {
    const arr = [1, 2, 3, 4];
    myRemoveWithoutCopy(arr, 3);
    expect(arr).not.toEqual([1, 2, 3, 4]);
  });
});

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

describe('Testando função myFizzBuzz()', () => {
  test('Se divisível por 3 e 5 retorna fizzubzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Se divisível por 3 retorna fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('Se divisível por 5 retorna buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('Se não divisível por 3 nem por 5 retorna o número', () => {
    expect(myFizzBuzz(13)).toBe(13);
  });
  test('Se o parâmetro não for número retorna false', () => {
    expect(myFizzBuzz('7')).toBeFalsy();
  });
});

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Comparando dois objetos', () => {
  test('Se obj1 e obj2 são iguais', () => {
    expect(obj1).toEqual(obj2);
  });
  test('Se obj1 e obj 3 não são iguais', () => {
    expect(obj1).not.toEqual(obj3);
  });
  test('Se obj1 e obj2 não são iguais pelo toBe()', () => {
    expect(obj1).not.toBe(obj2);
  });
});