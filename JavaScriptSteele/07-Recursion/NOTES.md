<h2>Recursion</h2>
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
.lightGrayBackground {
    background-color: lightgray;
}
</style>

<h3>Introduction</h3>
<div class="indent">
<ol class="upperAlpha">
<li>Define what recursion is and how it can be used.
    <ul>
    <li>A process (a function) that calls itself.</li>
    <li>Very commonly used in coding</li>
    <li>e.g. JSON.parse / JSON.stringify</li>
    <li>e.g. document.getElementById and DOM traversal algorithms</li>
    <li>Cleaner alternative to iteration.</li>
    </ul>
</li>
<li>Understand two essential components of recursion.
    <ol>
    <li>Different Input: Invoke the same function repeatedly with a different input.</li>
    <li>Base Case: A base case at which you will no longer invoke the function.</li>
    </ol>
</li>
<li>Visualize the call stack to better debug recursive functions.</li>
<li>Use helper method recursion and pure recursion.</li>
<li>Recursion tips.</li>
</ol>
</div>
<h3>The Call Stack</h3>
<div class="indent">
<ol class="upperAlpha">
<li>Built in data structure that manages what get's done.</li>
<li>Stack data structure
    <ul>
    <li>When a function is invoked, it is placed (pushed) on top of call stack.</li>
    <li>When the return keyword is reached or the function ends, the function is removed (popped) from the stack.</li>
    <li>Chrome dev tools.  </li>
    </ul>
</li>
</ol>

</div>
<h3>Recursive function examples</h3>
<div class="indent">
<ol class="upperAlpha">
<li>Count Down: 
<div>
<pre class="lightGrayBackground">
            function countDown(num) {
                if(num <=0) {
                    console.log("All done!")
                }
                console.log(num);
                num --;
                countDown(num);
            }

</pre>
</div>
</li>
<li>Sum Range: 
<pre class="lightGrayBackground">
            function sumRange(num) {
                if(num === 1) return 1;
                return num + sumRange(num-1);
            }
</pre>
</li>
<li>Factorial
<pre class="lightGrayBackground">
            function factorial(num) {
                if(num <= 1) {
                    return 1;
                }
                return num * factorial(num-1);
            }
</pre>
</li>
</ol>

</div>

<h3>Recursion Pitfalls</h3>
<div class="indent">
<ol class="upperAlpha">
<li>Base case does not exist or is wrong.</li>
<li>Returning the wrong thing.</li>
<li>Forgetting to return at all.</li>
<li>Stack overflow -> maxing out stack capacity.</li>
</ol>
</div>

<h3>Helper Method Recursion</h3>
<div class="indent">
<ol class="upperAlpha">
<li>Useful design pattern</li>
<li>Recursive (helper) function placed inside function.</li>
<li>Collect Odds: 
<pre class="lightGrayBackground">
            function collectOddValues(arr){
                let result = [];
                function helper(helperInput){
                    if(helperInput.length === 0) {
                        return;
                    }
                    if(helperInput[0] % 2 !== 0){
                        result.push(helperInput[0])
                    }
                    helper(helperInput.slice(1))
                }
                helper(arr)
                return result;
            }
</pre>
</li>
</ol>
</div>

<h3>Pure Recursion</h3>
<div class="indent">
<ol class="upperAlpha">
<li>No interior helper function</li>
<li>Collect Odds:
<pre class="lightGrayBackground">
            function collectOddValues(arr){
                let newArr = [];
                if(arr.length === 0) {
                    return newArr;
                }
                if(arr[0] % 2 !== 0){
                    newArr.push(arr[0]);
                }
                newArr = newArr.concat(collectOddValues(arr.slice(1)));
                return newArr;
            }
</pre>
</li>

</ol>
</div>

<h3>Recursion Tips</h3>
<div class="indent">
<ol class="upperAlpha">
<li>Arrays:  Use methods like slicke, spread operator, and concat to make copies of arrays so you do not mutate them.</li>
<li>Strings: Strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings.</li>
<li>Objects: use Object.assign or the spread operator.</li>
</ol>

</div>
