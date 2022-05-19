class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// var first = new Node("Hi");
// first.next = new Node("Bye");
// first.next.next = new Node("Again, HELLO!");

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    if (this.head === this.tail) {
      let thisPop = this.tail;
      this.length--;
      this.head = null;
      this.tail = null;
      return thisPop;
    }
    let thisNode = this.head;
    while (thisNode.next) {
      if (thisNode.next === this.tail) {
        let popNode = this.tail;
        this.tail = thisNode;
        this.length--;
        return popNode.val;
      }
      thisNode = thisNode.next;
    }
  }
}

var list = new LinkedList();

list.push("Hello");
list.push("Good Bye!!!");
list.push("Success!!  POP ME!!!!");

console.log(list.length);
console.log(list.head.val);
console.log(list.tail.val);
console.log(list.pop());
console.log(list.tail.val);
console.log(list.length);
list.pop();
list.pop();
console.log(list.length);
