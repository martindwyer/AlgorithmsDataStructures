import LinkedList from "./LinkedList.mjs";

var list = new LinkedList();

list.push("A");
list.push("B");
list.push("C");
list.push("D");
list.push("E");

console.log(list.get(4));
list.print();

list.reverse().print();

console.log(list);
