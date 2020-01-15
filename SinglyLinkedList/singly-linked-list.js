class Node {
 constructor(val) {
  this.val = val;
  this.next = null;
 }
}

class SinglyLinkedList {
 constructor() {
  this.head = null;
  this.tail = null;
  this.length = 0;
 }

 push(val) {
  const node = new Node(val);
  if (!this.head) {
   this.head = node;
   this.tail = this.head;
  } else {
   this.tail.next = node;
   this.tail = node;
  }
  this.length++;
  return this;
 }

 pop() {
  if (!this.head) {
   return undefined;
  }

  let current = this.head;
  let newTail = current;

  while (current.next) {
   newTail = current;
   current = current.next;
  }
  this.tail = newTail;
  this.tail.next = null;
  this.length--;
  if (this.length === 0) {
   this.head = null;
   this.tail = null;
  }
  return current;
 }

 shift() {
  if (!this.head) return undefined;
  this.head = this.head.next;
  this.length--;
  if (this.length === 0) {
   this.head = null;
   this.tail = null;
  }
  return this.head;
 }

 unshift(val) {
  const node = new Node(val);
  if (!this.head) {
   this.head = node;
   this.tail = node;
   return this.head;
  }
  let currentHead = this.head;
  this.head = node;
  this.head.next = currentHead;
  this.length++;
  return this;
 }

 get(index) {
  if (index > this.length - 1 || index < 0) {
   return undefined;
  }
  let current = this.head;
  let counter = 0;
  while (counter !== index) {
   current = current.next;
   counter++;
  }
  return current;
 }

 set(val, index) {
  let node = this.get(index);
  if (!node) {
   return undefined;
  }
  node.val = val;
  return true;
 }

 insert(val, index) {
  if (index < 0 || index > this.length) {
   return false;
  }
  if (index === 0) {
   return this.unshift(val);
  } else if (index === this.length - 1) {
   return this.push(val);
  }

  const node = new Node(val);
  let previousNode = this.get(index - 1);
  let saveNodesBeforeInsert = this.get(index);
  node.next = saveNodesBeforeInsert;
  previousNode.next = node;
  this.length++;
  return this;
 }

 remove(index) {
  if (index < 0 || index > this.length - 1) {
   return false;
  }
  if (index === 0) {
   return this.shift();
  } else if (index === this.length - 1) {
   return this.pop();
  }
  let previousNode = this.get(index - 1);
  let nodeToRemove = this.get(index);
  previousNode.next = nodeToRemove.next;
  this.length--;
  return this;
 }

 reverse() {
  let node = this.head;
  this.head = this.tail;
  this.tail = node;
  let next;
  let prev = null;

  for (let i = 0; i < this.length; i++) {
   next = node.next;
   node.next = prev;
   prev = node;
   node = next;
  }
  return this;
 }
}

module.exports = Node
