TREES

OBJECTIVES
Define what a tree is
Compare and contrast trees and lists
Explain the differences between trees, binary trees, and binary search trees
Implement operations on binary search trees

WHAT IS A TREE?
A data structure that consists of nodes in a parent / child relationship

Lists - linear

Trees - nonlinear

A Singly Linked List
(sort of a special case of a tree)

2

12

11

2

12

11

NOT A TREE
2

12

11

8

9

2

44

TREE TERMINOLOGY
Root - The top node in a tree.
Child -A node directly connected to another node when moving away from the Root.
Parent - The converse notion of a child.
Siblings -A group of nodes with the same parent.
Leaf - A node with no children.
Edge - The connection between one node and another.

KINDS OF TREES
Trees
Binary Trees
Binary Search Trees

TREES

Lots of different applications!

HTML DOM
Network Routing
Abstract Syntax Tree
Artificial Intelligence
Folders in Operating Systems
Computer File Systems

BINARY TREES

Lots of different applications as well!

Decision Trees (true / false)
Database Indicies
Sorting Algorithms

HOW BSTS WORK
Every parent node has at most two children
Every node to the left of a parent node is always less than the parent
Every node to the right of a parent node is always greater than the parent

INSERTING A NODE
Steps - Iteratively or Recursively

Create a new node
Starting at the root
Check if there is a root, if not - the root now becomes that new node!
If there is a root, check if the value of the new node is greater than or less than the value of the root
If it is greater
Check to see if there is a node to the right
If there is, move to that node and repeat these steps
If there is not, add that node as the right property
If it is less
Check to see if there is a node to the left
If there is, move to that node and repeat these steps
If there is not, add that node as the left property

Finding a Node in a BST
Steps - Iteratively or Recursively

Starting at the root
Check if there is a root, if not - we're done searching!
If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
If not, check to see if the value is greater than or less than the value of the root
If it is greater
Check to see if there is a node to the right
If there is, move to that node and repeat these steps
If there is not, we're done searching!
If it is less
Check to see if there is a node to the left
If there is, move to that node and repeat these steps
If there is not, we're done searching!

Big O of BST
Insertion - O(log n)

Searching - O(log n)

NOT guaranteed!

TREE
TRAVERSAL
VISIT EVERY NODE ONCE
10

19

6

20

8

99

TRAVERSING A TREE
Two ways:

TRAVERSING A TREE
Two ways:

Breadth-first Search
Depth-first Search

BFS

Steps - Iteratively

Create a queue (this can be an array) and a variable to store the values of nodes visited
Place the root node in the queue
Loop as long as there is anything in the queue
Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
If there is a left property on the node dequeued - add it to the queue
If there is a right property on the node dequeued - add it to the queue
Return the variable that stores the values

DFS - in order

Create a variable to store the values of nodes visited
Store the root of the BST in a variable called current
Write a helper function which accepts a node
If the node has a left property, call the helper function with the left property on the node
Push the value of the node to the variable that stores the values
If the node has a right property, call the helper function with the right property on the node
Invoke the helper function with the current variable
Return the array of values

DFS - PreOrder

Create a variable to store the values of nodes visited
Store the root of the BST in a variable called current
Write a helper function which accepts a node
Push the value of the node to the variable that stores the values
If the node has a left property, call the helper function with the left property on the node
If the node has a right property, call the helper function with the right property on the node
Invoke the helper function with the current variable
Return the array of values

DFS - PostOrder

Create a variable to store the values of nodes visited
Store the root of the BST in a variable called current
Write a helper function which accepts a node
If the node has a left property, call the helper function with the left property on the node
If the node has a right property, call the helper function with the right property on the node
Push the value of the node to the variable that stores the values
Invoke the helper function with the current variable
Return the array of values

Removing a Node

Steps - Iteratively

Find the parent of the node that needs to be removed and the node that needs to be removed
If the value we are removing is greater than the parent node
Set the right property of the parent to be null
If the value we are removing is less than the parent node​
Set the left property of the parent to be null
Otherwise, the node we are removing has to be the root, so set the root to be null

Steps - Iteratively

Removing a Node - 1 child
Find the parent of the node that needs to be removed and the node that needs to be removed
See if the child of the node to be removed is on the right side or the left side
If the value we are removing is greater than the parent node​​
Set the right property of the parent to be the child
If the value we are removing is less than the parent node​
Set the left property of the parent to be the child
Otherwise, set the root property of the tree to be the child

Steps - Iteratively

Removing a Node - 2 children
Find the parent of the node that needs to be removed and the node that needs to be removed
Find the predecessor node and store that in a variable
Set the left property of the predecessor node to be the left property of the node that is being removed
If the value we are removing is greater than the parent node​​
Set the right property of the parent to be the right property of the node to be removed
If the value we are removing is less than the parent node​
Set the left property of the parent to be the right property of the node to be removed
Otherwise, set the root of the tree to be the right property of the node to be removed
