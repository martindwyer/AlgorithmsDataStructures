<h2>Quick Sort</h2>

<p>
</p>

<p>Big O of Quick Sort:  </p>
<ul>
<li>Decompositions: <ul><li>O(log n) best case</li>
<li>O(n) worst case (already ordered list)</li></ul></li>
<li>Comparisons: O(n) in each decomposition</li>
<li>O(n log n) best case</li>
<li>O(n<sup>2</sup>) worst case</li>
</ul>

<h3>Pivot helper pseudocode</h3>

<ol>
<li>Accept three arguments: array, start index, end index</li>
<li>Grab the pivot from the start of the array.</li>
<li>Store the pivot index in a variable.</li>
<li>Loop through the array from start to end.<ol><li>If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the pivot index<li:</li></ol></li>
<li>Swap the starting element (i.e. the pivot) with the pivot index.</li>
</ol>

<p>Pivot helper implementation </p>

```

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

```

<h3>Quick Sort Pseudocode</h3>

<p>See pseudocode from Filho, p. 86</p>

<ol>
<li></li>
</ol>

<h3>My implementation</h3>

```
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
```
