<h1>Algorithms and Data Structures</h1>
<p>A course taught by Colt Steele</p>
<a href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/">course link</a>

<h2>Section 2: Big O Notation</h2>

<h3>Two algorithms</h3>

<p>Two ways to add up the numbers to n, an integer</p>

<p>A really operation intensive way:</p>
```
        function addUpToN(n) {
            
            // one op => assignment
            let sum = 0;

            // n comparisons, n increments of i (+=)
            for (let i = 0; i < n; i++) {
            // n operations (+=)
            sum += i;
            }
            return sum; // total ops => 5n + 1
        }

```

<p>A way that only takes 3 ops - no matter n.</p>
```

        function addUpTo(n) {
            return (n * (n + 1)) / 2;
        }

```

<h3>Timing code issues:</h3>

1.  Different machines will record different times.
2.  The same machine will record different times.
3.  For fast algorithms, speed measurements may not be precise enough.

<h3>The solution:</h3>
<ul>
<li>Count the number of simple operations required.</li>
<li>addUpTo(n) => n \* (n + 1) / 2 => has three operations</li>
<li>addUpToN(n) => 5n + 1</li>
</ul>

<h3>Big O</h3>
<ul>
<li>A way to formalize counting</li>
<li>Evaluate how ops of algorithm grow as input grows</li>
</ul>

<p>We say that an algorithm is O(1) if the number of simple ops does not grow as n grows. addUpTo(n) is O(1)</p>

<p>We say that an algorithm is O(f(n)) if the number of simple ops grows as a constant multiple of n. addUpToN(n) is O(n). </p>

<p>We say that an algorithm is O(n<sup>2</sup>) if the number of simple operations grows exponentially by a factor of 2 as n grows. </p>

<p>The following algorithm is O(n<sup>2</sup>):</p>
```

        function printAllPairs(n) {
            for(var i=0; i<n; i++) {
                for(var j=0; j<n; j++) {
                    console.log(i,j)
                }
            }
        }

```

<h3>Simplifying Big O Expressions</h3>

<p>When determining the op complexity of an algorithm, there are some helpful rules of thumb.</p>

<ul>
<li>Simplify O(500) to O(1) because the number of ops do not grow as n grows.</li>
<li>Simplify O(2n) to O(n) because as n approaches infinity, the 2 doesn't matter.</li>
<li>Simplify O(13n<sup>2</sup>) to O(n<sup>2</sup>)</li>
<li>Arithmetic ops are constant </li>
<li>Variable assignment is also constant</li>
<li>Accessing elements in an array(index) or object(key) are constant </li>
<li>In a loop, complexity is the length of the loop times the complexity of whatever happens inside the loop.</li>
</ul>

<h3>Space Complexity</h3>

<p>As n grows, how much additional memory is required by the algorithm.</p>

<p>Technically we are focusing on auxillary space complexity</p>


<ul>
<li>Most primitives (booleans, numbers, undefined, null) are constant space.</li>
<li>Strings require O(n) space where n is the length of the string.</li>
<li>Reference types are generally O(n) where n is the length of the array or number of keys for object. </li>
<li>sum(arr) below is O(1) space complexity (2 numbers) </li>
<li>double(arr) below is O(n) space complexity (new array length n)</li>
</ul>


```

    function sum(arr) {

        // one number
        let total = 0;

        // another number
        for(let i=0; i< arr.length; i++) {
            total += arr[i];
        }

        return total;

        // from a space perspective - only two numbers required = O(1)

    }

    function double(arr) {
        let newArr=[];
        for(let i=0; i<arr.length; i++) {
        newArr.push(2\*arr[i]);
        }
        return newArr;
    }

```

<h3>Logarithms</h3>

<p>Run into O(log n) and O(n log n) from time to time.</p>

<p>Logarithm is the inverse of exponentiation. </p>

<p>e.g. log<sub>2</sub>(8) = 3 because 2<sup>3</sup>=8</p>

<p>binary (base 2), decimal (base 10), and natural (base e) are the most common logarithms used.</p>

<p>In big O lit base 2 is often presumed, i.e.</p>

<p style="margin-left:50px">log === log<sub>2</sub></p>

<ul>
<li>Certain searching algorithms have logarithmic time complexity.
</li>
<li>Efficient sorting algorithms have logarithmic time complexity.
</li>
<li>Recursion sometimes leads to logarithmic space complexity.</li>
</ul>


```
