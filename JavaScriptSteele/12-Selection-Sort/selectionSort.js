let arr = [];

for (let j = 0; j < 15; j++) {
  arr.push(Math.floor(Math.random() * 100));
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function selectionSort(arr) {
  let minValueIndex;
  for (let i = 0; i < arr.length; i++) {
    minValueIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minValueIndex]) {
        minValueIndex = j;
      }
    }
    if (minValueIndex !== i) {
      swap(arr, i, minValueIndex);
    }
  }
  return arr;
}

console.log("Array: ", arr);

console.log("Sorted Array: ", selectionSort(arr));
