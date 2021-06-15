const { describe, test, it, expect } = require('@jest/globals');

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Testando função getUserName', () => {
  it('quando o usuário existe', () => {
    expect.assertions(1);
    return expect(getUserName(4)).resolves.toBe('Mark');
  });
  
  it('quando o usuário não existe', () => {
    expect.assertions(1);
    return expect(getUserName(2)).rejects.toEqual({ error: 'User with 2 not found.' });
  });
});

describe('Testando função getUserName com Async/Await', () => {
  it('quando o usuário existe', async () => {
    const name = await getUserName(4);
    expect(name).toBe('Mark')
  });
  
  it('quando o usuário não existe', async () => {
    try {
      const error = await getUserName(2);
    } catch(error) {
      expect(error).toEqual({ error: 'User with 2 not found.' });
    }
  });
});