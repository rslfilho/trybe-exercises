let headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = '#00b069';

let body = document.getElementsByTagName('body');
body[0].style.backgroundColor = '#f3f3f3';

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#003533';

let sections = document.getElementsByTagName('section');

for (let index = 0; index < sections.length; index += 1) {
  if (index < 1) {
    sections[index].style.backgroundColor = '#ff9f84'
  }
  else {
    sections[index].style.backgroundColor = '#f9db5e';
  }
}

let h3 = document.getElementsByTagName('h3');

for (let index = 0; index < h3.length; index += 1) {
  if (index < 2) {
    h3[index].style.backgroundColor = '#a500f3';
  }
  else {
    h3[index].style.backgroundColor = '#232525';
  }
}