const stringFunctions = require('./exercise_4_5');

jest.mock('./exercise_4_5');

describe('Testando a primeira função upperCase', () => {
  it('quando fazemos uma nova implementação', () => {
    stringFunctions.upperCase
      .mockImplementation((str) => str.toLowerCase());

    stringFunctions.upperCase('TESTE');

    expect(stringFunctions.upperCase).toHaveBeenCalled();
    expect(stringFunctions.upperCase).toHaveBeenCalledTimes(1);
    expect(stringFunctions.upperCase('TESTE')).toBe('teste');
    expect(stringFunctions.upperCase).toHaveBeenCalledTimes(2);
  });
});

describe('Testando a segunda função firstLetter', () => {
  it('quando fazemos uma nova implementação', () => {
    stringFunctions.firstLetter
      .mockImplementation((str) => str.slice(-1));
    
    stringFunctions.firstLetter('Teste');

    expect(stringFunctions.firstLetter).toHaveBeenCalled();
    expect(stringFunctions.firstLetter).toHaveBeenCalledTimes(1);
    expect(stringFunctions.firstLetter('Teste')).toBe('e');
    expect(stringFunctions.firstLetter).toHaveBeenCalledTimes(2);
  });
});

describe('Testando a terceira função concatTwoStrings', () => {
  it('quando fazemos uma nova implementação', () => {
    stringFunctions.concatTwoStrings
      .mockImplementation((strOne, strTwo, strThree) => strOne + strTwo + strThree);

    stringFunctions.concatTwoStrings('casa', 'da', 'mãe');

    expect(stringFunctions.concatTwoStrings).toHaveBeenCalled();
    expect(stringFunctions.concatTwoStrings).toHaveBeenCalledTimes(1);
    expect(stringFunctions.concatTwoStrings('casa', 'da', 'mãe')).toBe('casadamãe');
    expect(stringFunctions.concatTwoStrings).toHaveBeenCalledTimes(2);
  });
});