const mathStudents = (object, subject) => {
  let mathStudents = 0;

  for(let key in object) {
    if (object[key]['materia'] == subject) {
      mathStudents += object[key]['numeroEstudantes'];
    }
  }

  console.log(mathStudents);
}

mathStudents(allLessons, 'Matemática');

const createReport = (object, teacher) => {
  const result = {
    professor: teacher,
    aulas: [],
    estudantes: 0,
  }

  for (let key in object) {
    if (object[key]['professor'] == teacher) {
      result['aulas'].push(object[key]['materia']);
      result['estudantes'] += object[key]['numeroEstudantes'];
    }      
  }

  return result;
}

console.log(createReport(allLessons, 'Maria Clara'));