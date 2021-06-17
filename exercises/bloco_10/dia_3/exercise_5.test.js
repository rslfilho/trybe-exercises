const stringFunctions = require('./exercise_4_5');

describe('Testando a primeira função upperCase', () => {
  it('quando fazemos uma nova implementação', () => {
    const upperCase = jest
      .spyOn(stringFunctions, 'upperCase')
      .mockImplementation((str) => str.toLowerCase());

    upperCase('TESTE');

    expect(upperCase).toHaveBeenCalled();
    expect(upperCase).toHaveBeenCalledTimes(1);
    expect(upperCase('TESTE')).toBe('teste');
    expect(upperCase).toHaveBeenCalledTimes(2);

    stringFunctions.upperCase.mockRestore();

    expect(stringFunctions.upperCase('teste')).toBe('TESTE');
  });
});