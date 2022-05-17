/**
 * Binary Search
 * O(log(n))
 */

require("./states.js");

function binarySearch(arr, v) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.ceil((start + end) / 2);
  let ops = 0;

  while (start < end) {
    if (arr[middle] === v) {
      console.log("operations: ", ops);
      return middle;
    }
    if (v < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.ceil((start + end) / 2);
    ops++;
  }
  console.log("operations: ", ops);
  return -1;
}

const arr = [];

for (let j = 0; j < 500; j += 3) {
  arr.push(j);
}

console.log(binarySearch(arr, 3));
console.log(binarySearch(arr, 333));
console.log(binarySearch(arr, 495));
console.log(binarySearch(arr, 496));

//console.log(binarySearch(states, "Texaas"));
//console.log(binarySearch([1, 2, 3, 4, 5], 2));
