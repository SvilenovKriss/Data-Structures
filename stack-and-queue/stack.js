const Node = require("../SinglyLinkedList/singly-linked-list");

class Stack {
 constructor() {
  this.first = null;
  this.last = null;
  this.size = 0;
 }

 push(val) {
  const node = new Node(val);
  if (!this.first) {
   this.first = node;
   this.last = node;
  } else {
   const temp = this.first;
   this.first = node;
   this.first.next = temp;
  }
  this.size++;
  return node;
 }

 pop() {
  if (!this.first) return null;
  let temp = this.first;
  if (this.first === this.last) {
   this.first = null;
   this.last = null;
  } else {
   this.first = this.first.next;
  }
  this.size--;
  return temp;
 }
}

let stack = new Stack();

console.log(stack.push(1));
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.pop();
// stack.pop();
// stack.pop();
console.log(stack);
