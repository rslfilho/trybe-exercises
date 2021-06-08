const fetchPromisse = () => {
  return new Promise((resolve, reject) => {
    const numbers = [];
    for (let index = 0; index < 10; index += 1) {
      const randomNumber = Math.floor(Math.random() * 50) + 1;
      numbers.push(Math.pow(randomNumber, 2))
    };
  
    const numbersSum = numbers.reduce((acc, curr) => acc + curr);
  
    if (numbersSum < 8000) {
      resolve(numbersSum);
    } else {
      reject();
    }
  })
}

fetchPromisse()
  .then((response) => [ 2, 3, 5, 10].map((number) => response / number))
  .then((array) => console.log(array.reduce((acc, curr) => acc + curr).toFixed(2)))
  .catch(() => console.log('É mais de oito mil! Essa promise deve etar quebrada!'));