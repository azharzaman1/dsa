class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0 || !this.top;
  }

  stack(value) {
    const node = new ListNode(value);

    if (this.isEmpty()) {
      // empty stack
      this.top = node;
      this.length++;
      return node.value;
    }

    node.next = this.top;
    this.top = node;
    this.length++;
    return node.value;
  }

  unstack() {
    if (this.isEmpty()) return "UnderFlow";
    let top = this.top;
    let newTop = top.next;
    this.top = newTop;
    this.length--;
    return top.value;
  }

  peek() {
    if (this.isEmpty()) return "UnderFlow";
    return this.top.value;
  }

  print() {
    if (this.isEmpty()) return "UnderFlow";

    let node = this.top;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}

let stack = new Stack();

stack.stack(1);
stack.stack(2);
stack.stack(3);
console.log(stack.print());
stack.unstack();
console.log(stack.print());
stack.stack(100);
console.log(stack.print());
stack.stack(100);
console.log(stack.print());
console.log(stack.peek());

// stack.print();
// console.log(stack.peek());
// stack.unstack();
// console.log(stack.peek());
// stack.print();
