let clickCount = 0;

const eventButtonClick = () => {
  const button = document.getElementById('teste');
  const counter = document.getElementById('counter');

  button.addEventListener('click', () => {
    clickCount += 1;
    counter.innerHTML = clickCount;
  })
}

eventButtonClick();