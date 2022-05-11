/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the second
 * array has it's corresponding value squared in the second array.
 * The frequency of values must be the same.
 */

function same(arr1, arr2) {
  let objArr1 = {};
  let objArr2 = {};
  for (let n of arr1) {
    objArr1[n] = objArr1[n] + 1 || 1;
  }
  for (let m of arr2) {
    let ms = Math.sqrt(m);
    objArr2[ms] = objArr2[ms] + 1 || 1;
  }
  if (Object.keys(objArr1).length !== Object.keys(objArr2).length) {
    return false;
  } else {
    for (let key in objArr1) {
      if (objArr1[key] != objArr2[key]) {
        return false;
      }
    }
  }

  return true;
}

console.log("Same arrays");
console.log(same([1, 2, 3], [4, 1, 9])); //true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false

/**
 * Given two strings, write a function to determine if the second string
 * is an anagram of the first.  An anagram is a word, phrase, or name formed
 * by rearranging the letters of another, such as cinema, formed from iceman.
 */

function isAnagram(str1, str2) {
  let objectOne = {};
  let objectTwo = {};
  let strOne = str1.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let strTwo = str2.replace(/[^a-zA-Z]/g, "").toLowerCase();
  if (strOne.length !== strTwo.length) {
    return false;
  }
  for (let char of strOne) {
    objectOne[char] = objectOne[char] + 1 || 1;
  }

  for (let char of strTwo) {
    objectTwo[char] = objectTwo[char] + 1 || 1;
  }

  for (let key in objectOne) {
    if (objectOne[key] !== objectTwo[key]) {
      return false;
    }
  }
  return true;
}

console.log("\nAnagrams");
console.log(isAnagram("New York Times", "monkeys write")); // should return true
console.log(isAnagram("McDonald's restaurants", "Uncle Sam's standard rot")); // true
console.log(isAnagram("William Shakespeare", "I am a weakish speller")); // true
console.log(isAnagram("George Bush", "He bugs Gore")); // true
console.log(isAnagram("George Bush", "He bug Gore")); // false

function sumZero(arr) {
  let j = arr.length - 1;
  let i = 0;

  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === 0) {
      return [arr[i], arr[j]];
    } else if (sum > 0) {
      j -= 1;
    } else {
      i += 1;
    }
  }

  return [];
}

console.log("\nSum Zero?");
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2,2]

function countUniqueValues(arr) {
  if (arr.length === 1) {
    return 1;
  }

  let i = 0;
  let j = 1;
  let k = 0;
  while (j <= arr.length) {
    if (arr[i] === arr[j]) {
      j += 1;
      continue;
    }

    k += 1;
    i = j;
  }
  return k;
}

console.log("\nCount uniuque values");
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

function maxSubarraySum(arr, n) {
  if (arr.length === 0) {
    return null;
  }
  if (arr.length === n) {
    return arr.reduce((a, b) => a + b, 0);
  }
  if (arr.length === 1) {
    return arr[0];
  }
  if (n === 1) {
    return Math.max(...arr);
  }
  let i = 0;
  let j = n - 1;
  let max = -100000000000000;
  while (j < arr.length) {
    if (calculateSum(arr, i, j) > max) {
      max = calculateSum(arr, i, j);
    }
    i = i + 1;
    j = i + n - 1;
  }
  return max;
}

function calculateSum(arr, i, j) {
  let sum = 0;
  while (i < j + 1) {
    sum += arr[i];
    i += 1;
  }
  return sum;
}

console.log("\nMax sub array");
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
console.log(maxSubarraySum([4, 2, 1, 6], 4)); //13

function binarySearch(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log("\nBinary search");
console.log(
  binarySearch(
    [1, 2, 3, 4, 5, 8, 9, 10, 11, 15, 25, 35, 62, 88, 94, 95, 96],
    15
  )
); //9
