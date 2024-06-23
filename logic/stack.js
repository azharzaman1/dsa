class Stack {
  constructor() {
    this.array = []; // intiate stacks as empty array
  }

  isEmpty() {
    // check if stack is empty
    return this.array.length === 0;
  }

  push(item) {
    // add item to the stack
    this.array.push(item);
  }

  pop() {
    if (this.isEmpty()) return "No Item To Remove.";
    // remove last item in the stack
    return this.array.pop();
  }

  peek() {
    // returns last item in the stack
    return this.array.at(-1);
  }

  print() {
    // iterate over stack items and return as collective string
    let str = "";
    for (let i = 0; i < this.array.length; i++) {
      str += this.array[i] + " ";
    }
    return str;
  }
}

const l = console.log;

let stack = new Stack();

l(stack.print());
l(stack.push("Item 1"));
l(stack.push("Item 2"));
l(stack.print());
l(stack.pop());
l(stack.push("Item 2"));
l(stack.print());
l(stack.peek());
l(stack.print());
