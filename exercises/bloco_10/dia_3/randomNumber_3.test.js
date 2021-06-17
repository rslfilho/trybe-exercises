const randomNumber = require('./randomNumber');

describe('Ex 03 - Testando nova implementação na função que já existe', () => {
  it('se o reset e a reimplementação funcionaram', () => {
    const func = jest
    .spyOn(randomNumber, 'generateRandomNumber')
    .mockImplementation((a, b, c) => a * b * c);

    randomNumber.generateRandomNumber(2, 3, 4);

    expect(func(2, 3, 4)).toBe(24);
    expect(func).toHaveBeenCalledTimes(2);

    func
      .mockReset()
      .mockImplementation((a) => a * 2);
      
    expect(func(2)).toBe(4);
    expect(func).toHaveBeenCalledTimes(1);
  });
});