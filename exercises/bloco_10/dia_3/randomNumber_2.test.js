const randomNumber = require('./randomNumber');

jest.mock('./randomNumber');

describe('Ex 02 - Testando a criação de uma nova implementação', () => {
  
  randomNumber.generateRandomNumber.mockImplementation((a, b) => a / b);

  randomNumber.generateRandomNumber(6, 3);

  it('se funcionou a implementação', () => {
    expect(randomNumber.generateRandomNumber).toHaveBeenCalled();
    expect(randomNumber.generateRandomNumber).toHaveBeenCalledWith(6, 3);
    expect(randomNumber.generateRandomNumber(6, 3)).toBe(2);
    expect(randomNumber.generateRandomNumber).toHaveBeenCalledTimes(2);
  });

  
  it('se a implementação nova parou', () => {
    randomNumber.generateRandomNumber.mockRestore();
    expect(randomNumber.generateRandomNumber(6, 3)).not.toBe(2);
  });
});