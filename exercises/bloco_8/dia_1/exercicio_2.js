const checkNumber = (bet, result) => (bet !== result) ? false : true;

const lottery = (bet, func) => {
  const result = Math.ceil(Math.random() * 5);
  console.log(`Número sorteado: ${result}`);
  return func(bet, result) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(lottery(3, checkNumber));