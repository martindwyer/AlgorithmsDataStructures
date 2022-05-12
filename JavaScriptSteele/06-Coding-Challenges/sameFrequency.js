function sameFrequency(num1, num2) {
  let numOneString = num1.toString();
  let numTwoString = num2.toString();

  let numOneObj = {};
  let numTwoObj = {};
  for (let char of numOneString) {
    numOneObj[char] ? (numOneObj[char] += 1) : (numOneObj[char] = 1);
  }
  for (let char of numTwoString) {
    numTwoObj[char] ? (numTwoObj[char] += 1) : (numTwoObj[char] = 1);
  }
  if (Object.keys(numOneObj).length !== Object.keys(numTwoObj).length) {
    return false;
  }
  for (let key in numOneObj) {
    if (numOneObj[key] !== numTwoObj[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
