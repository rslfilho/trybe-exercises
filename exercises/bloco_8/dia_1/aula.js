const wakeUp = () => console.log('Acordando!!');

const drinkCoffee = () => console.log('Bora tomar café!!');

const goSleep = () => console.log('Partiu dormir!!');

const doingThings = (func) => func();

doingThings(wakeUp);
doingThings(drinkCoffee);
doingThings(goSleep);