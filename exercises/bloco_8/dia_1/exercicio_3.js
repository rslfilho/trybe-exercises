const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (answers, student) => {
  let result = 0;
  
  for (let question = 0; question < rightAnswers.length; question += 1) {
    if (student[question] !== 'N.A') {
      (answers[question] === student[question]) ? result += 1 : result -= 0.5;
    }
  }

  return result;
}

const studentGrade = (answers, student, func) => func(answers, student);

console.log(studentGrade(rightAnswers, studentAnswers, checkAnswers));

const checkAnswers2 = (answers, student) => {
  let result = {
    n_a: 0,
    correct: 0,
    wrong: 0,
  }

  for (let question = 0; question < rightAnswers.length; question += 1) {
    if (student[question] !== 'N.A') {
      (answers[question] === student[question]) ? result.correct += 1 : result.wrong += 1;
    } else {
      result.n_a += 1;
    }
  }

  return result;
}

const studentGrade2 = (answers, student, func) => {
  const result = func(answers, student);

  return `O aluno acertou ${result.correct} questões,
não respondeu ${result.n_a} questões e
errou ${result.wrong} questões.
A nota do aluno é ${result.correct - result.wrong * 0.5}`;
}

console.log(studentGrade2(rightAnswers, studentAnswers, checkAnswers2));