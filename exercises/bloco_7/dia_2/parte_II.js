const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

function studentAbilities(object) {
  const abilities = Object.keys(object);

  for (let index = 0; index < abilities.length; index += 1) {
    console.log(`${abilities[index]}, Nível: ${object[abilities[index]]}`)
  }
}

console.log('Estudante 1');
studentAbilities(student1);

console.log('Estudante 2');
studentAbilities(student2);