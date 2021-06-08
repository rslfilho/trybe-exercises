const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log('Retornando planeta em 04 segundos ...')
  setTimeout(() => {
    console.log("Returned planet: ", mars);
  }, 4000)
  
};

getPlanet(); // imprime Marte depois de 4 segundos