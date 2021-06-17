let { generateRandomNumber: generate } = require('./randomNumber');

describe('Ex 01 - Testando a função generateRandomNumber', () => {
  generate = jest.fn()
    .mockReturnValue(10);

  generate();

  it('se foi chamada', () => {
    expect(generate).toHaveBeenCalled();
  });

  it('se o retorno é o esperado', () => {
    expect(generate()).toBe(10);
  });

  it('quantas vezes foi chamada', () => {
    expect(generate).toHaveBeenCalledTimes(2);
  });
});
