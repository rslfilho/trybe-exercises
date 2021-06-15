const { test, describe, expect, it } = require('@jest/globals');

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  if (!professionalBoard.some(({ id: profID }) => profID === id)) {
    throw new Error('ID não indentificada');
  };
  if (!professionalBoard.some((professional) => {
    return Object.keys(professional).some((key) => key === detail);
  })) {
    throw new Error('Informação indisponível');
  };

  const professional = professionalBoard.find(({ id: profID }) => id === profID);

  return professional[detail];
};

describe('Testando a função searchEmployee', () => {
  test('Se é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  test('Se dá erro quando ID não existe', () => {
    expect(() => {searchEmployee('1111-11')}).toThrow();
  });
  test('Se lança o erro correto de ID não identificada', () => {
    expect(() => {searchEmployee('1111-11')}).toThrowError('ID não indentificada');
  });
  test('Se dá erro quando a informação não existe', () => {
    expect(() => {searchEmployee('4678-2', 'midleName')}).toThrow();
  });
  test('Se lança o erro correto de informação indisponível', () => {
    expect(() => {searchEmployee('4678-2', 'midleName')}).toThrowError('Informação indisponível');
  });
  test('Se buscar pelo Id e detail correto retorna a informação correta', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
    expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
    expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
  });
});