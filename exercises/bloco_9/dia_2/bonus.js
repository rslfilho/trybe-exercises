const sumRandomNumbers = async () => {
  const numbers = [];
  for (let index = 0; index < 10; index += 1) {
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    numbers.push(Math.pow(randomNumber, 2))
  };

  const numbersSum = numbers.reduce((acc, curr) => acc + curr);

  if (numbersSum >= 8000) throw new Error();

  return numbersSum;
}

const sumArray = async (sum) => [2, 3, 5, 10]
  .map((number) => sum / number)
  .reduce((acc, curr) => acc + curr).toFixed(2);

const fetchPromisse = async () => {
  try {
    const sum = await sumRandomNumbers();
    const arraySum = await sumArray(sum);
    // console.log(arraySum);
    return arraySum;
  } catch(error) {
    // console.log('É mais de oito mil! Essa promise deve etar quebrada!');
    return 'É mais de oito mil! Essa promise deve etar quebrada!';
  }
}

// fetchPromisse()
//   .then((response) => console.log(response));
