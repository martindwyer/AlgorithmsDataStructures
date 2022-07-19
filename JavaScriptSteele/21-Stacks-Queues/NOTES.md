STACKS

OBJECTIVES
Define what a stack is
Understand use cases for a stack
Implement operations on a stack data structure

WHAT IS A STACK?
A LIFO data structure!

The last element added to the stack will be the first element removed from the stack

HOW IS IT USED?

How we'll visualize a stack
A series of nodes!

Let's see this in action!

10

2

22

7

last

first

size = 4

HOW IS IT USED?
Think about a stack of plates, or a stack of markers, or a stack of....anything.

As you pile it up the last thing (or the topmost thing) is what gets removed first.

WE'VE SEEN
THIS BEFORE
The Call Stack!

WHERE STACKS ARE USED
Managing function invocations
Undo / Redo
Routing (the history object) is treated like a stack!

PUSHING
Add a value to the top of the stack!

PUSHING PSEUDOCODE
The function should accept a value
Create a new node with that value
If there are no nodes in the stack, set the first and last property to be the newly created node
If there is at least one node, create a variable that stores the current first property on the stack
Reset the first property to be the newly created node
Set the next property on the node to be the previously created variable
Increment the size of the stack by 1

POP
Remove a value from the top of the stack!

POP PSEUDOCODE
If there are no nodes in the stack, return null
Create a temporary variable to store the first property on the stack
If there is only 1 node, set the first and last property to be null
If there is more than one node, set the first property to be the next property on the current first
Decrement the size by 1
Return the value of the node removed

BIG O of STACKS
Insertion - O(1)

Removal - O(1)

Searching - O(N)

Access - O(N)

QUEUES
OBJECTIVES
WHAT IS A QUEUE?

QUEUES
OBJECTIVES
Define what a queue is
Understand use cases for a queue
Implement operations on a queue data structure

WHAT IS A QUEUE?

WE'VE SEEN THIS BEFORE

WHAT IS A QUEUE?
A FIFO data structure!

First In First Out

WE'VE SEEN THIS BEFORE
Queues exist everywhere! Think about the last time you waited in line....

Background tasks
Uploading resources
Printing / Task processing
How do we use them in programming?

Enqueue
Adding to the beginning of the Queue!

Remember, queues are a FIFO data structure

Enqueue Pseudocode
This function accepts some value
Create a new node using that value passed to the function
If there are no nodes in the queue, set this node to be the first and last property of the queue
Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
Increment the size of the queue by 1

Dequeue pseudocode
If there is no first property, just return null
Store the first property in a variable
See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
If there is more than 1 node, set the first property to be the next property of first
Decrement the size by 1
Return the value of the node dequeued

BIG O of QUEUES
Insertion - O(1)

Removal - O(1)

Searching - O(N)

Access - O(N)
