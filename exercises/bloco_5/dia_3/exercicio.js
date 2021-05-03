function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 01
function createDaysOfTheMonth() {
  const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const dezDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDays.length; index += 1) {
    let day = dezDays[index];
    let dayListItem = document.createElement('li');
    dayListItem.innerHTML = day;
    
    if (day === 25) {
      dayListItem.className = 'day holiday friday';
    } else if (day === 24 || day === 31) {
      dayListItem.className = 'day holiday';
    } else if (day === 4 || day === 11 || day === 18) {
      dayListItem.className = 'day friday';
    } else {
      dayListItem.className = 'day';
    }

    dezDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheMonth();

// Exercício 02
function createButton(string, id) {
  let btnContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = id;
  button.innerHTML = string;

  btnContainer.appendChild(button);
}

createButton('Feriados', 'btn-holiday');

// Exercício 03
let holidayButton = document.getElementById('btn-holiday');

holidayButton.addEventListener('click', function () {
  let holidays = document.querySelectorAll('.holiday');
  
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === 'white') {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)';
      holidays[index].style.border = '';
    } else {
      holidays[index].style.backgroundColor = 'white';
      holidays[index].style.border = '1px solid';
    }
  }
});

// Exercício 04
createButton('Sexta-Feira', 'btn-friday');

// Exercício 05
const fridayDays = [4, 11, 18, 25]
let fridayButton = document.getElementById('btn-friday');

fridayButton.addEventListener('click', function () {
  let fridays = document.querySelectorAll('.friday');
  
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML === 'SEXTA!!') {
      fridays[index].innerHTML = fridayDays[index];
    } else {
      fridays[index].innerHTML = 'SEXTA!!';
    }
  }
});

// Exercício 06
let days = document.getElementsByClassName('day');

for (let index = 0; index < days.length; index += 1) {
  days[index].addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
  });
  days[index].addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  });
};

// Exercício 07
function createTask(string) {
  let taskList = document.querySelector('.my-tasks');
  let task = document.createElement('span');
  task.innerHTML = string;

  taskList.appendChild(task);
}

createTask('Cozinhar');

// Exercício 08
function addColor(color) {
  let taskList = document.querySelector('.my-tasks');
  let background = document.createElement('div');
  background.style.backgroundColor = color;
  background.className = 'task';

  taskList.appendChild(background);
}

addColor('green');

// Exercício 09
let taskColor = document.querySelectorAll('.task');

for (let index = 0; index < taskColor.length; index += 1) {
  taskColor[index].addEventListener('click', function() {
    if (taskColor[index].className === 'task selected') {
      taskColor[index].className = 'task';
    } else {
      taskColor[index].className = 'task selected';
    };
  });
};

// Exercício 10
let dayColor = document.querySelectorAll('.day');

for (let index = 0; index < dayColor.length; index += 1) {
  dayColor[index].addEventListener('click', function() {
    if (dayColor[index].style.backgroundColor === 'green') {
      dayColor[index].style.backgroundColor = 'rgb(238,238,238)'
      dayColor[index].style.color = '#777';
    } else {
      dayColor[index].style.backgroundColor = 'green';
      dayColor[index].style.color = 'white';

    };
  });
};