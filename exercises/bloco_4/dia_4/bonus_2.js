function add(num1, num2) {
  let num1String = num1.toString();
  let num2String = num2.toString();
  let result = '';
  let biggestLength;
  let smallestLength;
  
  if (num1String.length > num2String.length) {
    biggestLength = num1String.length;
    smallestLength = num2String.length

    for (let addZeroIndex = 0; addZeroIndex < biggestLength - smallestLength; addZeroIndex += 1) {
      num2String = 0 + num2String;
    };
  }
  else {
    biggestLength = num2String.length;
    smallestLength = num1String.length;

    for (let addZeroIndex = 0; addZeroIndex < biggestLength - smallestLength; addZeroIndex += 1) {
      num1String = 0 + num1String;
    };
  };
  
  for (let sumIndex = 0; sumIndex < biggestLength; sumIndex += 1) {
    result += Number(num1String[sumIndex]) + Number(num2String[sumIndex]);
  };
  
  return Number(result);
};

console.log(add(12,8));