<h2>Doubly Linked Lists</h2>
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
<li>Data structure where each object in the list is a node, which has a pointer to another node or null.  The list has the following properties:
    <ul>
    <li>Head</li>
    <li>Tail</li>
    <li>Length</li>
    </ul>
</li>
<li>Data structure that contains methods
    <ul>
    <li>Insert</li>
    <li>Remove</li>
    <li>Push</li>
    <li>Pop</li>
    </ul>
</li>

</ol>
</div>

<h3>Comparison with Arrays</h3>
<div class="indent">
<ol class="upperAlpha">
<li>Lists
    <ul>
    <li>Do not have indices</li>
    <li>Connected via nodes with a next pointer</li>
    <li>Random access is not allowed</li>
    <li>Insertion and deletion are efficient ops.</li>
    </ul>
</li>
<li>Arrays
    <ul>
    <li>Indexed in order.</li>
    <li>Insertion and deletion can be expensive</li>
    <li>Can be quickly accessed at a specific index.</li>
    </ul>
</li>
</ol>
</div>

<h3>Push Pseudocode</h3>
<div class="indent">
<ol>
    <li>Function should accept a value</li>
    <li>Create a new node using the value</li>
    <li>If there is no head, set head and tail equal to the new node.</li>
    <li>Otherwise, se the next property on the tail to be the new node and set the tail property on the list to be the new node.</li>
    <li>Increment length by 1</li>

</ol>
</div>

<h3>Pop Pseudocode</h3>
<div class="indent">
<ol>
<li>If no nodes in the list, return undefined</li>
<li>Loop through the list until you reach the tail</li>
<li>Set the next property of the 2nd to last node to be null.</li>
<li>Set the tail to be the 2nd to last node.</li>
<li>Decrement the length of the list by 1</li>
<li>Return the value of the node removed</li>
</ol>
</div>

<h3>Heading</h3>
<div class="indent">
<ol class="upperAlpha">
<li>
    <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    </ul>
</li>
<li>Stuff</li>
<li>Stuff</li>
<li>Stuff</li>
<li>Stuff</li>
</ol>
</div>
<h3>Heading</h3>
<div class="indent">
<ol class="upperAlpha">
<li>
    <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    </ul>
</li>
<li>Stuff</li>
<li>Stuff</li>
<li>Stuff</li>
<li>Stuff</li>
</ol>
</div>
<h3>Heading</h3>
<div class="indent">
<ol class="upperAlpha">
<li>
    <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    </ul>
</li>
<li>Stuff</li>
<li>Stuff</li>
<li>Stuff</li>
<li>Stuff</li>
</ol>
</div>
