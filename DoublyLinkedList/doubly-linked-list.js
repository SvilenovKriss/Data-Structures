class Node {
 constructor(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
 }
}

class DoublyLinkedList {
 constructor() {
  this.head = null;
  this.tail = null;
  this.length = 0;
 }

 push(val) {
  const node = new Node(val);

  if (!this.head) {
   this.head = node;
   this.tail = node;
  } else {
   this.tail.next = node;
   node.prev = this.tail;
   this.tail = node;
  }
  this.length++;
  return this;
 }

 pop() {
  if (!this.head) return undefined;
  if (this.length === 1) {
   this.head = null;
   this.tail = null;
  } else {
   let prevNode = this.tail;
   this.tail = prevNode.prev;
   this.tail.next = null;
   prevNode.prev = null;
  }
  this.length--;
  return prevNode;
 }

 shift() {
  if (this.length === 0) return undefined;
  let oldHead = this.head;

  if (this.length === 1) {
   this.head = null;
   this.tail = null;
  } else {
   this.head = oldHead.next;
   this.prev = null;
   oldHead.prev = null;
  }
  this.length--;
  return oldHead;
 }

 unshift(val) {
  const node = new Node(val);

  if (this.length === 0) {
   this.head = node;
   this.tail = node;
  } else {
   node.next = this.head;
   this.head = node;
  }
  this.length++;
  return this;
 }

 get(index) {
  if (index < 0 || this.length <= index) return undefined;
  if ((this.length - 1) / 2 < index) {
   let counter = this.length - 1;
   let current = this.tail;
   while (counter !== index) {
    current = current.prev;
    counter--;
   }
   return current;
  } else {
   let counter = 0;
   let current = this.head;
   while (counter !== index) {
    current = current.next;
    counter++;
   }
   return current;
  }
 }

 set(index) {
  let nodeToChange = this.get(index);

  if (!nodeToChange) {
   return false;
  }
  return true;
 }

 insert(index, val) {
  if (index < 0 || this.length <= index) return undefined;
  if (index === 1) return this.unshift(val);
  if (index === this.length - 1) return this.push(val);

  let node = new Node(val);
  let prevNode = this.get(index - 1);
  let currNode = this.get(index);
  prevNode.next = node;
  node.next = currNode;
  node.prev = prevNode;
  this.length++;
  return node;
 }

 remove(index) {
  if (index < 0 || this.length <= index) return undefined;
  if (index === 1) return this.shift();
  if (index === this.length - 1) return this.pop();

  let nodeToRemove = this.get(index);
  nodeToRemove.next.prev = nodeToRemove.prev;
  nodeToRemove.prev.next = nodeToRemove.next;
  nodeToRemove.next = null;
  nodeToRemove.prev = null;
  this.length--;
  return nodeToRemove;
 }
}
