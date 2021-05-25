const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: 0,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: 0,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: 0,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.floor(Math.random() * (dragon.strength - 15)) + 15;

const warriorDamage = () => Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength)) + warrior.strength;

const mageSpell = () => {
  let damage = Math.floor(Math.random() * (mage.intelligence)) + mage.intelligence;
  let manaSpent = 15;

  if (mage.mana < 15) {
    damage = 'Não possui mana suficiente';
    manaSpent = 0;
  }

  return { damage: damage, manaSpent: manaSpent, };
};

const gameActions = {
  // Crie as HOFs neste objeto.
};

gameActions.warriorShift = (callback) => {
  const damage = callback();
  
  dragon.healthPoints -= damage;
  warrior.damage += damage;
};

gameActions.mageShift = (callback) => {
  const spell = callback();
 
  dragon.healthPoints -= spell.damage;
  mage.damage += spell.damage;
  mage.mana -= spell.manaSpent;
};

gameActions.dragonShift = (callback) => {
  const damage = callback();
  
  warrior.healthPoints -= damage;
  mage.healthPoints -= damage;
  dragon.damage += damage;
};

gameActions.roundEnd = () => {
  gameActions.warriorShift(warriorDamage);
  gameActions.mageShift(mageSpell);
  gameActions.dragonShift(dragonDamage);
  
  return battleMembers;
};

console.log('Round 1');
console.log(gameActions.roundEnd());

console.log('Round 2');
console.log(gameActions.roundEnd());

console.log('Round 3');
console.log(gameActions.roundEnd());