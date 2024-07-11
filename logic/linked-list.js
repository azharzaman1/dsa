import { fetchAndPrepareTransactionsData } from "./transactions";

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = this.head;
    this.length = 0;
  }

  add(value) {
    let newNode = new ListNode(value);

    this.head = this.tail = newNode;
    if (!this.head) {
      // no head: no items in list
      this.head = newNode;
      this.tail = newNode;
    } else {
      // node(s) are present already
      // appends node to the end
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // return newly added node, and increment nodes count
    this.length++;
    return newNode;
  }

  addToHead(value) {
    let newNode = new ListNode(value);

    if (!this.head) {
      // no head: no items in list
      this.head = newNode;
      this.tail = newNode;
    } else {
      // node(s) are present already
      // set head of list to next prop. of new node
      // set list head equal to new node.
      // this appends previous nodes to new node
      // and replaces head of list with new node
      newNode.next = this.head;
      this.head = newNode;
    }

    // return newly added node, and increment nodes count
    this.length++;
    return newNode;
  }

  addAtPosition(position, value) {
    let newNode = new ListNode(value);

    // add some checks
    if (position === 0) {
      return "UnderFlow";
    }

    if (position === 1) {
      // node needs to be added to head
      return this.addToHead(value);
    }

    if (position === this.length + 1) {
      // this.length = current no. of nodes
      // this.length + 1 = tail + 1
      // means node needs to be added after tail
      return this.add(value);
    }

    if (position > this.length + 1) {
      // invalid position
      return "OverFlow";
    }

    let i = 1;
    // set variable temp equal to current head
    let temp = this.head;

    while (i < position - 1) {
      // keep iterating unless we have reached
      // previous node to desired position
      temp = temp.next;
      i++;
    }

    if (temp) {
      // set new nodes next to previous nodes next
      // as these nodes plan to switch places
      newNode.next = temp.next;
      // set previous nodes next to new node
      temp.next = newNode;
      // we have succesfully added node at position p

      this.length++;
      return newNode;
    }
  }

  set(position, value) {
    // use getAtPosition (explained later) method to find node
    const foundNode = this.getNodeAtPosition(position);
    if (foundNode) {
      // if found set new value
      foundNode.value = value;
      // return true
      return true;
    }
    // if not found return false
    return false;
  }

  shift() {
    if (!this.head) return undefined;

    // set currentHead variable = current head
    var currentHead = this.head;

    // set new head = next node of the previous head
    this.head = currentHead.next;

    // decrement nodes count
    this.length--;

    // after this operation, if list is empty
    // set tail to null
    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  pop() {
    if (!this.head) return undefined;
    // set current = current head

    if (this.length === 1) {
      let tail = this.head;
      this.head = 0;
      this.tail = 0;

      return tail;
    }

    let i = 1;
    // set variable temp equal to current head
    let nextTail = this.head;

    while (i < this.length - 1) {
      // keep iterating unless we have reached
      // previous node to desired position
      nextTail = nextTail.next;
      i++;
    }

    const currentTail = nextTail.next;
    nextTail.next = null;
    this.tail = nextTail;
    this.length--;

    return currentTail;
  }

  remove(position) {
    // invalid position
    if (position < 1 || position > this.length) return undefined;
    // position of head: remove head with shift method
    if (position === 1) return this.shift();
    // position of tail: remove tail with pop method
    if (position === this.length) return this.pop();

    // get previous node to target node
    // getNodeAtPosition is explained below
    let previousNode = this.getNodeAtPosition(position - 1);
    // bypass target node from referencing
    let removed = previousNode.next;
    previousNode.next = removed.next;

    this.length--;
    return removed;
  }

  getHead() {
    return this.head.value;
  }

  getTail() {
    return this.tail.value;
  }

  getAtPosition(position) {
    // invalid position value
    if (position < 1 || position > this.length) return undefined;

    // set variable temp = current head
    let temp = this.head;

    for (let a = 1; a < position; a++) {
      // keep iterating over nodes, until position is reached
      temp = temp.next;
    }

    // return value of found node
    return temp.value;
  }

  // same as above mothod, only difference being
  // returns raw node instead of value
  getNodeAtPosition(position) {
    // invalid position value
    if (position < 1 || position > this.length) return undefined;

    // set variable temp = current head
    let temp = this.head;

    for (let a = 1; a < position; a++) {
      // keep iterating over nodes, until position is reached
      temp = temp.next;
    }

    // return value of found node
    return temp;
  }

  print() {
    // set variable temp = current head
    let temp = this.head;
    while (temp) {
      // keep iterating over nodes, until it is tail (detect null)
      // use any method to print: i use log.
      console.log(temp.value);
      temp = temp.next;
    }
  }

  clear() {
    // clears list by setting head to null
    // clears out all nested nodes
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  reverse() {
    if (this.length === 0) return false;

    // set temp variable = current head
    let temp = this.head;
    // change list head with list tail
    this.head = this.tail;
    // change list tail with list head
    this.tail = temp;

    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      // iterate over all nodes
      // keep replacing next node with the prev
      // and prev nodes with next one
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

let linkedList = new SinglyLinkedList();

const l = console.log;

l(linkedList.print()); //
l(linkedList.length); // 0
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
l(linkedList.print()); // 10 20 30
l(linkedList.length); // 3

// delete head
linkedList.shift();
l(linkedList.print()); // 20 30

// add head
linkedList.addToHead(10);
l(linkedList.print()); // 10 20 30

// add at position
linkedList.addAtPosition(2, 15);
l(linkedList.print()); // 10 15 20 30

// set value
linkedList.set(2, 20);
linkedList.set(3, 30);
linkedList.set(4, 40);
l(linkedList.print()); // 10 20 30 40

// remove tail
linkedList.pop();
l(linkedList.print()); // 10 20 30

// remove at position
linkedList.remove(2);
l(linkedList.print()); // 10 30

// getters
l(linkedList.getHead()); // 10
l(linkedList.getTail()); // 30
linkedList.addAtPosition(2, 20);
l(linkedList.print()); // 10 20 30
l(linkedList.getAtPosition(2)); // 20
l(linkedList.getNodeAtPosition(2)); // {value: 20, next: next_node}

linkedList.reverse();
l(linkedList.print()); // 30 20 10
linkedList.clear();
l(linkedList.print()); //
l(linkedList.length); // 0
