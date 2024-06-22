import { fetchAndPrepareTransactionsData } from "./logic/transactions";

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

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return newNode;
  }

  addToHead(value) {
    let newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return newNode;
  }

  addAtPosition(p, value) {
    let newNode = new ListNode(value);

    if (p === 1) {
      this.addToHead(value);
    } else if (p === this.length + 1) {
      this.add(value);
    } else if (p > this.length + 1) {
      return "OverFlow";
    } else {
      let i = 1;
      let node = this.head;

      while (i < p - 1) {
        node = node.next;
        i++;
      }

      if (node) {
        newNode.next = node.next;
        node.next = newNode;
        this.length++;
        return this;
      }
    }
  }

  getAtPosition(i) {
    if (i < 1 || i > this.length) return undefined;
    let node = this.head;

    for (let a = 1; a < i; a++) {
      node = node.next;
    }

    return node.value;
  }

  getFirst() {
    return this.head.value;
  }

  getLast() {
    return this.tail.value;
  }

  printAll() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }
}

let transactionsData = await fetchAndPrepareTransactionsData();

// let listnode = listnodes.at(-1);

// for (let i = listnodes.length - 1; i >= 0; i--) {
//   listnode = listnodes[i];
//   listnode.next = listnodes[i + 1] || null;
// }

let linkedList = new SinglyLinkedList();

transactionsData.forEach((entry) => linkedList.add(entry));

// mutating
// console.log(linkedList.add(2));
// console.log(linkedList.addToHead(1));
// console.log(linkedList.add(3));
// console.log(linkedList.addAtPosition(4, 4));

// reading
// console.log(linkedList.getFirst());
// console.log(linkedList.getAtPosition(2));
// console.log(linkedList.getAtPosition(3));
// console.log(linkedList.getLast());
// console.log(linkedList.printAll());

// clearing
// console.log(linkedList.clear());
console.log(linkedList.printAll());
