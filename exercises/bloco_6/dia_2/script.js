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

let picker = new Pikaday({ 
  field: document.getElementById('initial-date'),
  format: 'DD/MM/YYYY',
  defaultDate: '01/01/2021',
  setDefaultDate: true,
});

// function createErrorSection() {
//   const parentElement = document.querySelector('main');
//   const section = document.createElement('section');

//   section.id = 'error';
//   section.innerHTML = '<fieldset id="errorInfo"><legend>Algo deu Errado</legend></fieldset>';

//   parentElement.insertBefore(section, parentElement.firstElementChild);
// }

// function createErrorP(typeOfError) {
//   const parentElement = document.getElementById('errorInfo');
//   const errorP = document.createElement('p');

//   if (typeOfError === 'completion') {
//     errorP.innerHTML = 'Todos os campos são Obrigatórios!';
//   } else if (typeOfError === 'invalidDate') {
//     errorP.innerHTML = 'Data Inválida!';
//   }

//   parentElement.appendChild(errorP);
// }

// function checkCompletion() {
//   const inputs = document.getElementsByTagName('input');
//   const textAreas = document.getElementsByTagName('textarea');

//   for (let index = 0; index < inputs.length; index += 1) {
//     if (inputs[index].value === '') {
//       return createErrorSection(), createErrorP('completion');
//     } 
//   }

//   for (let index = 0; index < textAreas.length; index += 1) {
//     if (textAreas[index].value === '') {
//       return createErrorSection(), createErrorP('completion');
//     } 
//   }

//   return 'go';
// }

// // function checkMaxLength() {
// //   if (document.getElementById('name').value.length > 40) alert('Nome muito grande');
// //   if (document.getElementById('email').value.length > 50) alert('Email muito grande');
// //   if (document.getElementById('cpf').value.length > 11) alert('CPF muito grande');
// //   if (document.getElementById('adress').value.length > 200) alert('Endereço muito grande');
// //   if (document.getElementById('city').value.length > 28) alert('Cidade muito grande');
// //   if (document.getElementById('resume').value.length > 1000) alert('Resumo muito grande');
// //   if (document.getElementById('office-description').value.length > 500) alert('Descrição muito grande');

// //   return 'go';
// // }

// function checkDate() {
//   const dateInput = document.getElementById('initial-date');
//   const datePattern = /^\d\d\/\d\d\/\d\d\d\d$/;
  
//   if (datePattern.test(dateInput.value) === false) {
//     return createErrorSection(), createErrorP('invalidDate');
//   }
//   return 'go';
// }

// function createCvSection() {
//   const parentElement = document.querySelector('main');
//   const section = document.createElement('section');

//   section.id = 'curriculum';
//   section.innerHTML = '<h2>Seu Currículo</h2><fieldset id="personal"><legend>Dados Pessoais</legend></fieldset><fieldset id="last-job"><legend>Dados do último Emprego</legend></fieldset>';

//   parentElement.insertBefore(section, parentElement.firstElementChild);
// }

// function onlyUnique(value, index, self) {
//   return self.indexOf(value) === index;
// }

// function createNameArray() {
//   const form = document.forms[0];
//   const allNames = [];

//   for (let index = 0; index < form.length; index += 1) {
//     allNames[index] = form.elements[index].name;
//   }

//   const noEmptyNames = allNames.filter( (el) => { return el; });
//   return noEmptyNames.filter(onlyUnique);
// }

// function createNameP(inputIndex) {
//   const inputNames = createNameArray();
//   const personalData = document.getElementById('personal');
//   const lastJobData = document.getElementById('last-job');
//   const dataField = document.createElement('p');
  
//   dataField.innerHTML = document.forms[0].elements[inputNames[inputIndex]].value
  
//   if (inputIndex < 7) {
//     personalData.appendChild(dataField);
//   } else {
//     lastJobData.appendChild(dataField);
//   }
  
// }

// function createLabelArray() {
//   const labels = document.querySelectorAll('label');
//   const allLabels = [];

//   for (let index = 0; index < labels.length; index += 1) {
//     if (index === 6) {
//       allLabels.push('Tipo:');
//       index += 2;
//     }

//     allLabels.push(labels[index].innerHTML);
//   }

//   return allLabels;
// }

// function createLabel(labelIndex) {
//   const labelContent = createLabelArray();
//   const personalData = document.getElementById('personal');
//   const lastJobData = document.getElementById('last-job');
//   const labelField = document.createElement('label');

//   labelField.innerHTML = labelContent[labelIndex];
  
//   if (labelIndex < 7) {
//     personalData.appendChild(labelField);
//   } else {
//     lastJobData.appendChild(labelField);
//   }
  
// }

// function createCurriculum() {
//   createCvSection();
  
//   for (let index = 0; index < 11; index += 1) {
//     createLabel(index);
//     createNameP(index);
//   }
  
// }

// function removeCreatedElement() {
//   const parentElement = document.querySelector('main');
//   const formElement = document.querySelector('#form');
  
//   if (formElement !== parentElement.firstElementChild) {
//     parentElement.removeChild(parentElement.firstElementChild);
//   }
// }

// function eventSubmitForm() {
//   const button = document.getElementById('submit');
  
//   button.addEventListener('click', (event) => {
//     event.preventDefault();
//     removeCreatedElement();

//     if (checkCompletion() === 'go' && checkDate() === 'go') {
//       createCurriculum();
//       location.href = '#curriculum';
//     } else {
//       location.href = '#error';
//     }
//     // checkCompletion();
//     // // checkMaxLength();
//     // checkDate();
//   })
// }

// function eventClearButton() {
//   const clearButton = document.getElementById('clear');
//   const inputs = document.querySelectorAll('input');
//   const textarea = document.querySelectorAll('textarea');

//   clearButton.addEventListener('click', () => {
//     removeCreatedElement();

//     for (let indexInputs = 0; indexInputs < inputs.length; indexInputs += 1) {
//       inputs[indexInputs].value = '';
//     }

//     for (let indexTextArea = 0; indexTextArea < textarea.length; indexTextArea += 1) {
//       textarea[indexTextArea].value = '';
//     }
//   })
// }

addStates();
// eventSubmitForm();
// eventClearButton();
