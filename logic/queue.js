class Queue {
  constructor() {
    this.array = [];
  }

  isEmpty() {
    return this.array.length === 0;
  }

  enqueue(i) {
    this.array.push(i);
  }

  dequeue() {
    if (this.isEmpty()) return "UnderFlow";
    return this.array.shift();
  }

  invert() {
    if (!this.isEmpty()) return this.array.reverse();
  }

  front() {
    if (this.isEmpty()) return "UnderFlow";
    return this.array.at(0);
  }

  print() {
    let str = "";
    for (let i = 0; i < this.array.length; i++) {
      str += this.array[i] + " ";
    }
    return str;
  }
}

const l = console.log;

let queue = new Queue();

l(queue.print());
l(queue.enqueue("Item 1"));
l(queue.enqueue("Item 2"));
l(queue.enqueue("Item 3", { new: true }));
l(queue.dequeue());
l(queue.front());
l(queue.invert());
l(queue.print());
