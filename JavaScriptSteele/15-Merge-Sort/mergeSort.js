let arr = [];

for (let j = 0; j < 5; j++) {
  arr.push(Math.floor(Math.random() * 100));
}

function mergeArrays(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid)); // goes all the way to a return
  let right = mergeSort(arr.slice(mid)); // then goes all the way to a return
  return mergeArrays(left, right);
}

console.log(mergeArrays([1, 10, 50], [2, 14, 99, 100]));

console.log(mergeSort([10, 24, 76, 72, 1, 9]));

console.log("Array: ", arr);

console.log("Sorted Array: ", mergeSort(arr));
