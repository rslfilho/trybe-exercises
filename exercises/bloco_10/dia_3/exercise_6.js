const fetch = require("node-fetch");

const fetchDogPhoto = async () => {
  const URL = 'https://dog.ceo/api/breeds/image/random';
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const objFromApi = await response.json();
  return objFromApi;
};

module.exports = {
  fetchDogPhoto,
};
