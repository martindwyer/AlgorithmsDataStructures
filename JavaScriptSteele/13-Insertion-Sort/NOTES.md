<h2>Insertion Sort</h2>

<p>Builds up the sort by gradually creating a larger half of the array which is always sorted.  Similar to selection and bubble sort, the operational complexity is O(n<sup>2</sup>)
</p>

<h3>Pseudocode</h3>

<ol>
<li>Start by picking the second element in the array.</li>
<li>First element starts the sorted portion.</li>
<li>Compare with the item to its left, swap as needed.</li>
<li>Continue with the next item and if it is in the incorrect order iterated through the sorted portion to find the right position.</li>
<li>When you find the right position, swap with the appropriate spot.</li>
<li>Repeat until array is sorted.</li>
<li>Return sorted array</li>
</ol>

<h3>My implementation</h3>

```
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

```
