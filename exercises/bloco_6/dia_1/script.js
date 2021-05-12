function addStates() {
  const states = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MS',
    'MT',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
]
  const parentElement = document.getElementById('state');

  for (let index = 0; index < states.length; index += 1) {
    const optionState = document.createElement('option');
    optionState.value = states[index];
    optionState.innerHTML = states[index];

    parentElement.appendChild(optionState);
  }
}

function checkCompletion() {
  const inputs = document.getElementsByTagName('input');
  const textAreas = document.getElementsByTagName('textarea');

  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      alert('Preencha todos os campos!');
      break;
    } 
  }

  for (let index = 0; index < textAreas.length; index += 1) {
    if (textAreas[index].value === '') {
      alert('Preencha todos os campos!');
      break;
    } 
  }

  return 'go';
}

// function checkMaxLength() {
//   if (document.getElementById('name').value.length > 40) alert('Nome muito grande');
//   if (document.getElementById('email').value.length > 50) alert('Email muito grande');
//   if (document.getElementById('cpf').value.length > 11) alert('CPF muito grande');
//   if (document.getElementById('adress').value.length > 200) alert('Endereço muito grande');
//   if (document.getElementById('city').value.length > 28) alert('Cidade muito grande');
//   if (document.getElementById('resume').value.length > 1000) alert('Resumo muito grande');
//   if (document.getElementById('office-description').value.length > 500) alert('Descrição muito grande');

//   return 'go';
// }

function checkDate() {
  const dateValue = document.getElementById('initial-date').value;
  const datePattern = /^\d\d\/\d\d\/\d\d\d\d$/;
  
  if (datePattern.test(dateValue) === false) {
    alert('Data em formato não permitido');
  }
  return 'go';
}

function createCvSection() {
  const parentElement = document.querySelector('main');
  const section = document.createElement('section');

  section.id = 'curriculum';
  section.innerHTML = '<h2>Seu Currículo</h2> <div></div>';

  parentElement.appendChild(section);
}

function createIdArray() {
  const labels = document.querySelectorAll('label');
  const allFors = [];

  for (let index = 0; index < labels.length; index += 1) {
    allFors[index] = labels[index].htmlFor;
  }

  return allFors;
}

function createCurriculum() {

}

function eventSubmitForm() {
  const button = document.getElementById('submit');
  
  button.addEventListener('click', (event) => {
    event.preventDefault();
    checkCompletion();
    // checkMaxLength();
    checkDate();

  })
}

addStates();
eventSubmitForm();