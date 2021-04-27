let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Questão 01
console.log(`Bem-vinda, ${info.personagem}`);

//Questão 02
info.recorrente = 'Sim';

console.log(info);

// Questão 03
for (let key in info) {
  console.log(key);
};

// Questão 04
for (let key in info) {
  console.log(info[key]);
};

// Questão 05
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let key in info) {
  console.log(info[key] + ' e ' + info2[key]);
};