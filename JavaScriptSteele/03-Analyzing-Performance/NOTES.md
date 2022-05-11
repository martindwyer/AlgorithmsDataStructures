<h2>Section 3: Arrays and Objects</h2>

<h3>Big O Perspective</h3>

<h4>Objects</h4>

<p>Objects work well when: </p>
<ul>
<li>When you don't need order</li>
<li>When you need fast access, insertion, or removal.</li>
</ul>

<p>Object performance: </p>
<ul>
<li>Insertion: O(1)</li>
<li>Removal: O(1)</li>
<li>Searching: O(n)</li>
<li>Access: O(1)</li>
</ul>

<p>Performance of methods</p>
<ul>
<li>Object.keys(obj): O(n)</li>
<li>Object.entries(obj): O(n)</li>
<li>obj.hasOwnProperty(prop): O(1)</li>
</ul>

<h4>Arrays</h4>

<p>Arrays are used very often.  </p>
<ul>
<li>Ordered</li>
<li>Can hold different data types.</li>
</ul>

<p>Use them when you need order. Lists.  Linked lists.</p>

<p>Array performance:</p>
<ul>
<li>Insertion: depends -> beginning O(n) or end O(1)</li>
<li>Removal: depends -> beginning O(n) or end O(1)</li>
<li>Searching: O(n)</li>
<li>Access: O(1)</li>
</ul>

<p>Array methods:</p>
<ul>
<li>push: O(1)</li>
<li>pop: O(1)</li>
<li>shift: O(n)</li>
<li>unshift: O(n)</li>
<li>concat: O(n)</li>
<li>slice: O(n)</li>
<li>splice: O(n)</li>
<li>sort: O(n * log n)</li>
<li>forEach, map, filter, reduce...: O(n)</li>
</ul>
