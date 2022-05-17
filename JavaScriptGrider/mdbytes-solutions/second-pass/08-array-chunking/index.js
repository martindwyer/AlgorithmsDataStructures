// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let items = [];
  function helper(arr) {
    for (let item of arr) {
      if (Array.isArray(item)) {
        helper(item);
      } else {
        items.push(item);
      }
    }
  }
  for (let item of array) {
    if (Array.isArray(item)) {
      helper(item);
    } else {
      items.push(item);
    }
  }
  //console.log("items", items);
  let returnArray = [];
  let subArray;
  let index;
  let itemCount = 0;
  for (let j = 0; j < items.length; j++) {
    if (j % size === 0) {
      subArray = [];
      index = 0;
    }
    subArray[index] = items[j];
    index++;
    itemCount++;
    if (subArray.length === size || itemCount === items.length) {
      returnArray.push(subArray);
    }
  }
  return returnArray;
}

//console.log(chunk([1, 2, 3], 1));
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(chunk(arr, 2));

module.exports = chunk;
