/**
 * Linear search
 * O(n)
 */

require("./states.js");

function linearSearch(arr, v) {
  let ops = 0;
  for (let i = 0; i < arr.length; i++) {
    ops++;
    if (arr[i] === v) {
      console.log("operations", ops);
      return i;
    }
  }
  console.log("operations", ops);
  return -1;
}

const arr = [];

for (let j = 0; j < 500; j += 3) {
  arr.push(j);
}

console.log(linearSearch(arr, 3));
console.log(linearSearch(arr, 333));
console.log(linearSearch(arr, 495));
console.log(linearSearch(arr, 496));
