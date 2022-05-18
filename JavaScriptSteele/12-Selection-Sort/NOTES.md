<h2>Selection Sort</h2>

<p>Similar to bubble sort, but instead of placing large values into sorted position, it places small values into their sorted position. Operational complexity is O(n<sup>2</sup>) because there is no alternative for running through the collection n times.  
</p>

<h3>Pseudocode</h3>

<ol>

<li>Start looping with a variable called i from the beginning of the array to the end.</li>
<li>Make a variable to store the index of the lowest value.</li>
<li>Inner loop with i from the beginning until the end of the array</li>
<li>Compare minimum value to minimum of each item</li>
<li>Reassign minimum where value is less than min value].</li>
<li>At end of array, swap min value with first item at index i.</li>
</ol>

<h3>My implementation</h3>

```
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
```
