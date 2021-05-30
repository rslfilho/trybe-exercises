let numbers = [50, 85, -30, 3, 15];

let highest = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > highest) highest = numbers[index];
}

// console.log(highest);

highest = numbers.reduce((acc, number) => number > acc ? number : acc);

// console.log(highest);

numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

let sumEven = numbers.reduce((acc, number) => number % 2 === 0 ? acc + number : acc, 0);

// console.log(sumEven);

sumEven = numbers.filter((number) => number % 2 === 0).reduce((acc, number) => acc + number);

// console.log(sumEven);

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const betterGrade = estudantes.map((estudante) => {
  const betterSubject = estudante.materias.reduce((acc, materia) => materia.nota > acc.nota ? materia : acc);

  return `O estudante ${estudante.nome} ${estudante.sobrenome} tem melhores resultados em ${betterSubject.name}, com nota ${betterSubject.nota}`;
})

console.log(betterGrade);