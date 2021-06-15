const { describe, test, it, expect } = require('@jest/globals');

const fetch = require('node-fetch');

const URL = 'https://api.github.com/orgs/tryber/repos';

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Testando função getRepos', () => {
  it('se retorna o array com conteúdo correto', async () => {
    const repos = await getRepos(URL);
    expect(repos.some((repo) => repo === 'sd-01-week4-5-project-todo-list')).toBeTruthy();
    expect(repos.some((repo) => repo === 'sd-01-week4-5-project-meme-generator')).toBeTruthy();
  });
});