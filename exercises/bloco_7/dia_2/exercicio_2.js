const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (object, key, value) => {
  object[key] = value;
}

addTurno(lesson2, 'turno', 'manhã');
console.log(lesson2);

const listKeys = (object) => {
  console.log(Object.keys(object));
}

listKeys(lesson1);

const objectLength = (object) => {
  console.log(Object.keys(object).length);
}

objectLength(lesson3);

const listValues = (object) => {
  console.log(Object.values(object));
}

listValues(lesson2);

const allLessons = {};

allLessons.lesson1 = Object.assign({}, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
allLessons.lesson3 = Object.assign({}, lesson3);

console.log(allLessons);

const totalStudents = (object) => {
  let students = 0;

  for(let key in object) {
    students += object[key]['numeroEstudantes'];
  }

  console.log(students);
}

totalStudents(allLessons);

const keyValue = (object, index) => {
  console.log(Object.values(object)[index]);
}

keyValue(lesson1, 0);

// const isKeyAndValue = (object, key, value) => {
//   const entries = Object.entries(object);
//   
//   if (entries.includes(`['turno', 'noite']`)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isKeyAndValue(lesson3, 'turno', 'noite'));
// console.log(isKeyAndValue(lesson3, 'materia', 'Maria Clara'));

const isKeyAndValue = (object, key, value) => {
  const entries = Object.entries(object);

  for (let index = 0; index < entries.length; index += 1) {
    if (entries[index][0] == key && entries[index][1] == value) return true;
  }

  return false;
}

console.log(isKeyAndValue(lesson3, 'turno', 'noite'));
console.log(isKeyAndValue(lesson3, 'materia', 'Maria Clara'));
