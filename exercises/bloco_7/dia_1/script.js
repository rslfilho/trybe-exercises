let clicks = 0;

const eventButtonClick = () => {
  const button = document.getElementById('teste');
  const counter = document.getElementById('counter');

  button.addEventListener('click', () => {
    clicks += 1;
    counter.innerHTML = clicks;
  })
}

eventButtonClick();