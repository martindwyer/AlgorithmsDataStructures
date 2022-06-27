import Node from "./Node.mjs";

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

  shift() {
    if (this.length === 0) return undefined;
    let thisNode = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return thisNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    return this;
  }

  get(n) {
    if (n < 0 || n >= this.length) return null;
    if (n === this.length - 1) return this.tail;
    let step = 0;
    let thisNode = this.head;
    while (step < n) {
      thisNode = thisNode.next;
      step++;
    }
    return thisNode;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    var prevNode = this.get(index - 1);
    var tempNode = prevNode.next;
    var newNode = new Node(val);
    newNode.next = tempNode;
    prevNode.next = tempNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var prevNode = this.get(index - 1);
    var removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    // swap the head and the tail

    // create variables called next and prev
    // create a variable called thisNode initialized to this.head
    let thisNode = this.head;
    this.head = this.tail;
    this.tail = thisNode;
    let prevNode = null;
    let nextNode = null;

    for (var i = 0; i < this.length; i++) {
      nextNode = thisNode.next;
      thisNode.next = prevNode;
      prevNode = thisNode;
      thisNode = nextNode;
    }

    return this;
  }

  print() {
    var arr = [];
    var thisNode = this.head;
    while (thisNode) {
      arr.push(thisNode.val);
      thisNode = thisNode.next;
    }
    console.log(arr);
  }
}

export default LinkedList;
