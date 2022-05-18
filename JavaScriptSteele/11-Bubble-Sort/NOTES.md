<h2>Sorting Algorithms</h2>

<p>Process of rearranging items in a collection so that the items are in some kind of order.</p>

<ul>
<li>Numbers</li>
<li>Names</li>
<li>Alphabetically</li>
<li>etc...</li>
</ul>

<p>Why learn sorting?</p>

<ul>
<li>Sorting is an incredibly common task</li>
<li>Many different ways to sort things, and different techniques have their own advantages and disadvantages.</li>
</ul>

<h3>JavaScript Array.sort()</h3>

<p>Default value is according to string ASCII values</p>

<p>arr.sort([sort function])</p>

<ul>
<li>Comparator function tells JavaScript how you want to sort.</li>
<li>Comparator looks at pairs of elements (a and b), determines their sort order based on the return value...<ul><li>If it returns a negative number, a comes before b</li><li>If it returns a positive number, b comes before a</li></ul></li>
</ul>

<h3>Bubble Sort</h3>

<ul>
<li>Pairs of the collection are examined in order</li>
<li>Pairs sorted one at a time</li>
<li>Next pair including the highest value of the preceding pair.</li>
<li>Result is that highest value "Bubbles" to the top of the list.</li>
<li>Requires n operations, n-1 times, i.e. O(n<sup>2</sup>)</li>
</ul>

<h3>Swapping Items</h3>

<ul>
<li>Many sorting algorithms involve some kind of swapping</li>
<li>In JavaScript there are two common ways to swap:
    <ul>
    <li>ES5
        <pre style="background-color:lightgray;">
function swap(arr,idx1,idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
        </pre>
    </li>
    <li>ES2015
    <pre style="background-color:lightgray;">
const swap = (arr,idx1,idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}
    </pre>   
    </li>
    </ul>
</li>
</ul>

<h3>Pseudocode</h3>

<ol>
<li>Start looping with a variable called i from the end of the array to the beginning.</li>
<li>Inner loop with j from the beginning until i-1</li>
<li>Compare arr[j] to arr[j+1]</li>
<li>If arr[j] > arr[j+1], swap them.</li>
<li>Return the sorted array.</li>
</ol>

<h3>My implementation</h3>
```
        function swap(arr, idx1, idx2) {
            let temp = arr[idx1];
            arr[idx1] = arr[idx2];
            arr[idx2] = temp;
        }

       function bubbleSort(arr) {
            let noSwaps;
            for (let i = arr.length - 1; i > 0; i--) {
                noSwaps = true;
                for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    noSwaps = false;
                }
                }
                if (noSwaps) break;
            }
            return arr;
        }

```

```
