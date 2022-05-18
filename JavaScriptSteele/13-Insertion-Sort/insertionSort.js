let arr = [];

for (let j = 0; j < 5; j++) {
  arr.push(Math.floor(Math.random() * 100));
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

console.log("Array: ", arr);

console.log("Sorted Array: ", insertionSort(arr));
