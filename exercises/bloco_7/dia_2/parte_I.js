function addKeyToObject(object, keyName, value) {
  object[keyName] = value;

  return object;
}

console.log(addKeyToObject(
  {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  },
  'lastName',
  'Faria'
))