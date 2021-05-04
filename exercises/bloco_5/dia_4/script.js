// Paleta de cores
let color1 = '#9cdef6';
let color2 = '#6cb0f2';
let color3 = '#6549da';
let color4 = '#a86cad';
let color5 = '#fca481';
let color6 = '#fdcb66';
let main = document.querySelector('main');
let textContainer = document.querySelector('.text-container');

setPreferences();

function setPreferences() {
  if (typeof(Storage) != 'undefined') {
    if (localStorage.bgColor !== undefined) {
      main.style.backgroundColor = localStorage.getItem('bgColor');
    }
    if (localStorage.textColor !== undefined) {
      textContainer.style.color = localStorage.getItem('textColor');
    }
    if (localStorage.fontSize !== undefined) {
      textContainer.style.fontSize = localStorage.getItem('fontSize');
    } else {
      textContainer.style.fontSize = '16px';
    }
    if (localStorage.lineHeight !== undefined) {
      textContainer.style.lineHeight = localStorage.getItem('lineHeight');
    } else {
      textContainer.style.lineHeight = '1.2';
    }
    if (localStorage.fontFamily !== undefined) {
      textContainer.style.fontFamily = localStorage.getItem('fontFamily');
    }
  }
}

function createEditItem(classItem) {
  let editContainer = document.querySelector('.edit-container');
  let editItem = document.createElement('div');
  
  editItem.classList.add('edit-item', classItem);

  editContainer.appendChild(editItem);
};

createEditItem('edit-background');
createEditItem('edit-color');
createEditItem('edit-fontSize');
createEditItem('edit-lineHeight');
createEditItem('edit-fontFamily');

function createEditP(text, parentClass) {
  let editItem = document.querySelector(parentClass);
  let editP = document.createElement('p');

  editP.innerHTML = text;
  
  editItem.appendChild(editP);
};

createEditP('Cor do Fundo', '.edit-background');
createEditP('Cor do Texto', '.edit-color');
createEditP('Tamanho da Fonte', '.edit-fontSize');
createEditP('Espaçamento', '.edit-lineHeight');
createEditP('Fonte', '.edit-fontFamily');

function createEditDiv(color, text, divClass, parentClass) {
  let editItem = document.querySelector(parentClass);
  let editDiv = document.createElement('div');

  editDiv.style.backgroundColor = color;
  editDiv.className = divClass;
  editDiv.innerHTML = text;

  editItem.appendChild(editDiv);
}

createEditDiv(color1, '', 'backgroundDiv', '.edit-background');
createEditDiv('white', '', 'backgroundDiv', '.edit-background');
createEditDiv(color5, '', 'backgroundDiv', '.edit-background');
createEditDiv(color6, '', 'backgroundDiv', '.edit-background');

createEditDiv('white', '', 'textColorDiv', '.edit-color');
createEditDiv('black', '', 'textColorDiv', '.edit-color');
createEditDiv(color3, '', 'textColorDiv', '.edit-color');
createEditDiv(color4, '', 'textColorDiv', '.edit-color');

createEditDiv('none', '+', 'fontSizeDiv', '.edit-fontSize');
createEditDiv('none', '-', 'fontSizeDiv', '.edit-fontSize');

createEditDiv('none', '+', 'lineHeightDiv', '.edit-lineHeight');
createEditDiv('none', '-', 'lineHeightDiv', '.edit-lineHeight');

createEditDiv('none', '1', 'fontFamilyDiv', '.edit-fontFamily');
createEditDiv('none', '2', 'fontFamilyDiv', '.edit-fontFamily');
createEditDiv('none', '3', 'fontFamilyDiv', '.edit-fontFamily');

// Mudando a cor de Fundo
let backgroundDiv = document.querySelectorAll('.backgroundDiv');

for (let index = 0; index < backgroundDiv.length; index += 1) {
  backgroundDiv[index].addEventListener('click', function(event) {
    main.style.backgroundColor = event.target.style.backgroundColor;
    localStorage.setItem('bgColor', event.target.style.backgroundColor);
  })
}

// Mudando a cor do Texto
let textColorDiv = document.querySelectorAll('.textColorDiv');

for (let index = 0; index < textColorDiv.length; index += 1) {
  textColorDiv[index].addEventListener('click', function(event) {
    textContainer.style.color = event.target.style.backgroundColor;
    localStorage.setItem('textColor', event.target.style.backgroundColor);
  })
}

// Mudando o Tamanho da Fonte
let fontSizeDiv = document.querySelectorAll('.fontSizeDiv');

for (let index = 0; index < fontSizeDiv.length; index += 1) {
  fontSizeDiv[index].addEventListener('click', function() {
    if (index === 0) {
      textContainer.style.fontSize = ((parseInt(textContainer.style.fontSize)) + 1) + 'px';
    } else {
      textContainer.style.fontSize = ((parseInt(textContainer.style.fontSize)) - 1) + 'px';
    }
    localStorage.setItem('fontSize', textContainer.style.fontSize);
  })
}

// Mudando o Espaçamento
let lineHeightDiv = document.querySelectorAll('.lineHeightDiv');

for (let index = 0; index < lineHeightDiv.length; index += 1) {
  lineHeightDiv[index].addEventListener('click', function() {
    if (index === 0) {
      textContainer.style.lineHeight = ((Number(textContainer.style.lineHeight)) + 0.3);
    } else {
      textContainer.style.lineHeight = ((Number(textContainer.style.lineHeight)) - 0.3);
    }
    localStorage.setItem('lineHeight', textContainer.style.lineHeight);
  })
}

// Mudando a Fonte
let fontFamilyDiv = document.querySelectorAll('.fontFamilyDiv');

for (let index = 0; index < fontFamilyDiv.length; index += 1) {
  fontFamilyDiv[index].addEventListener('click', function() {
    if (index === 0) {
      textContainer.style.fontFamily = `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`;
    } else if (index === 1) {
      textContainer.style.fontFamily = 'serif';
    } else if (index === 2) {
      textContainer.style.fontFamily = 'monospace';
    }
    localStorage.setItem('fontFamily', textContainer.style.fontFamily);
  })
}