<h2>Problem Solving Patterns</h2>
<style>
.indent {
    margin-left: 30px;
}
.upperAlpha {
    list-style-type: upper-alpha;
}
.lowerAlpha {
    list-style-type: lower-alpha;
}

</style>

<h4>Frequency Counting Pattern</h4>
<div class="indent">
<ol class="upperAlpha">
<li>Uses objects or sets to collect values and record frequencies</li>
<li>Can avoid the need for nested loops or O(n<sup>2</sup>) ops with arrays or strings</li>
<li>See isAnagram challenge answer in snippets.js</li>
</ol>
</div>

<h4>Multiple Pointers Pattern</h4>
<div class="indent">
<ol class="upperAlpha">
<li>Creating pointers or values</li>
<li>Pointers correspond with an index or position</li>
<li>Pointers usually start at beginning and end.</li>
<li>Pointers move toward the middle.</li>
<li>See sumZero(arr) in snippets.js</li>
<li>See also countUniqueValues(arr) in snippets.js</li>
</ol>
</div>

<h4>Sliding Window Pattern</h4>
<div class="indent">
<ol class="upperAlpha">
<li>Looking for a continuous subset of data</li>
<li>Two pointers slide together across data set</li>
<li>e.g. longest sequence of unique characters</li>
<li>See maxSubarraySum(arr,n) in snippets.js</li>
</ol>
</div>

<h4>Divide and Conquer Pattern</h4>
<div class="indent">
<ol class="upperAlpha">
<li>Sorting: Quick Sort, Merge Sort</li>
<li>Binary search, binary search trees</li>
<li>See binarySearch(array,val) in snippets.js</li>
</ol>
</div>
