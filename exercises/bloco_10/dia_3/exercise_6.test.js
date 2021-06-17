const fetch = require("node-fetch");
const { fetchDogPhoto } = require("./exercise_6");

jest.mock('node-fetch');

const responseFake = {
  "message": "https://images.dog.ceo/breeds/coonhound/n02089078_3412.jpg",
  "status": "request success"
};

describe('Testando a função fethDogPhoto', () => {
  it('quando a requisição funcionar', async () => {
    expect.assertions(4);
    fetch.mockImplementation(async () => {
      return {
        json: async () => {
          return responseFake;
        }
      }
    })

    const dogPhotoObj = await fetchDogPhoto();

    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://dog.ceo/api/breeds/image/random');
    expect(dogPhotoObj.status).toBe('request success');
  });

  it('quando a requisição falhar', async () => {
    responseFake.status = 'request failed';
    fetch.mockImplementation(async () => {
      return {
        json: async () => {
          return responseFake;
        }
      }
    })

    const dogPhotoObj = await fetchDogPhoto();

    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith('https://dog.ceo/api/breeds/image/random');
    expect(dogPhotoObj.status).toBe('request failed');
  });
});