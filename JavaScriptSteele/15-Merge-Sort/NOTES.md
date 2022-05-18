<h2>Merge Sort</h2>

<p>A combination of splitting up, merging, and sorting.  Exploits the fact that arrays of 0 or 1 elements are always sorted. Decomposes array into subarrays until you get to arrays of length 0 or 1. Then merge them back together.  
</p>

<p>Big O of Merge Sort:  O(n log n)</p>
<ul>
<li>The splitting (decompositions) are O(log n)</li>
<li>Comparisons when merging arrays back together are O(n)</li>
<li>O(n log n) is the best a sorting algorithm can achieve.</li>
<li>Space complexity is O(n) so memory might be a reason to avoid.</li>
</ul>

<h3>Function to Merge Sorted Arrays</h3>

O(n+m)

n = length of first array
m = length of second array

<h5>Merge arrays pseudocode</h5>

<ol>
<li>Create an empty array.</li>
<li>Take a look at the smallest values in each input array.</li>
<li>While there are still remaining values in the arrays</li>
<li>If the value from the first array is smaller than the value from the second array, push the value in the first array into the results array, move on to the second value in the first array.</li>
<li>If the value in the first array is larger than the value in the second array, pursh the value in the second array into your results array and move on to the next value in the second array.</li>
<li>Continue the process until the items in the arrays have been exhausted.</li>
<li>return the results array. </li>
</ol>

```
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

```

<h3>Merge Sort Pseudocode</h3>

<ol>
<li>Define a base case where the array is length 1 or less.</li>
<li>Split the array in two recursively until both halves have been split completely.</li>
<li>Merge the splits of both sides.</li>
<li>Return the sorted array.</li>
</ol>

<h3>My implementation</h3>

```
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid)); // goes all the way to a return
  let right = mergeSort(arr.slice(mid)); // then goes all the way to a return
  return mergeArrays(left, right);
}

```
