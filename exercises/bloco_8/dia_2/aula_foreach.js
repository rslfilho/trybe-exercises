const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email, index) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados com o código ${index}`);
};

// Adicione seu código aqui

emailListInData.forEach(showEmailList);