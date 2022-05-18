let arr = [];

for (let j = 0; j < 50; j++) {
  arr.push(Math.floor(Math.random() * 100));
}

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);

  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

console.log("Array: ", arr);

console.log("Sorted Array: ", quickSort(arr));
