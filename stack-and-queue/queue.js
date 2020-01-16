const Node = require("../SinglyLinkedList/singly-linked-list");

class Queue {
 constructor() {
  this.first = null;
  this.last = null;
  this.size = 0;
 }

 enqueue(val) {
  const node = new Node(val);
  if (!this.first) {
   this.first = node;
   this.last = node;
  } else {
   this.last.next = node;
   this.last = node;
  }
  this.size++;
  return this;
 }

 dequeue() {
  if (!this.first) return null;
  const temp = this.first;
  if (this.first === this.last) {
   this.first = null;
   this.last = null;
  } else {
   this.first = this.first.next;
  }
  this.size--;
  temp.next = null;
  return temp;
 }
}
