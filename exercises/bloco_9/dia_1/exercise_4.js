const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = (temperature, delay) => {
  console.log('Getting data from Curiosity...')
  setTimeout(() => {
    console.log(`Mars temperature is: ${temperature} degree Celsius`);
  }, delay)
}

sendMarsTemperature(getMarsTemperature(), messageDelay()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo