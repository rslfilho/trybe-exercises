const { describe, test, it, expect } = require('@jest/globals');

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('Testando função uppercase', () => {
  it('Se o callback faz o que devia', (done) => {
    const string = 'palavra-teste'
    uppercase(string, (str) => {
      expect(str).toBe('PALAVRA-TESTE');
      done();
    });
  });
});