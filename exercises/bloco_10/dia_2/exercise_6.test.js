const { describe, test, it, expect } = require('@jest/globals');

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalFiltered = Animals.find((animal) => animal.name === name);
      if(animalFiltered) return resolve(animalFiltered);
      return reject('Nenhum animal com esse nome!');
    }, 200)
  })
);

const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name).then(animal => animal)
};

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age === age);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };

      return reject('Não possui animal com essa idade.');
    }, 200);
  })
);

const getListAnimals = (age) => {
  return findAnimalsByAge(age).then(list => list)
};

// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe um animal com aquela idade', () => {
    it('retorna um array com o objeto do animal', async ()=> {
      await expect(getListAnimals(2)).resolves.toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
    });
  });
  
  describe('Quando não existe um animal com aquela idade', () => {
    it('retorna um erro específico', async () => {
      await expect(getListAnimals(4)).rejects.toBe('Não possui animal com essa idade.')
    });
  });
});