function averagePair(arr, avg) {
  if (arr.length < 2) {
    return false;
  }
  let j = arr.length - 1;
  let i = 0;

  while (i < j) {
    let average = (arr[i] + arr[j]) / 2;
    if (average === avg) {
      return true;
    } else if (average > avg) {
      j -= 1;
    } else {
      i += 1;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
