class TreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(value) {
    let newNode = new TreeNode(value);
    // check if tree contains any nodes before

    if (this.size === 0 && this.root === null) {
      this.root = newNode;
      this.size++;
      return this;
    }

    let tempRoot = this.root;

    while (true) {
      // check if new node belongs to left or right of the root
      if (value === tempRoot.value) {
        return this;
      }

      if (value < tempRoot.value) {
        // belongs to left
        if (tempRoot.left === null) {
          tempRoot.left = newNode;
          this.size++;
          return this;
        }

        tempRoot = tempRoot.left;
      } else if (value > tempRoot.value) {
        // belongs to right
        if (tempRoot.right === null) {
          tempRoot.right = newNode;
          this.size++;
          return this;
        }

        tempRoot = tempRoot.right;
      } else {
        return this;
      }
    }
  }

  lookup(value) {
    if (this.size === 0 || this.root === null) {
      return false;
    }

    let tempRoot = this.root;
    while (true) {
      console.log("itr");
      if (value === tempRoot.value) {
        return true;
      }

      if (value < tempRoot.value) {
        // left
        if (tempRoot.left === null) {
          return false;
        }
        tempRoot = tempRoot.left;
      } else if (value > tempRoot.value) {
        if (tempRoot.right === null) {
          return false;
        }
        tempRoot = tempRoot.right;
      } else {
        return false;
      }
    }
  }

  minValueNode() {
    let tempRoot = this.root;
    while (true) {
      if (tempRoot.left === null) return tempRoot;
      tempRoot = tempRoot.left;
    }
  }

  maxValueNode() {
    let tempRoot = this.root;
    while (true) {
      if (tempRoot.right === null) return tempRoot;
      tempRoot = tempRoot.right;
    }
  }

  getSize() {
    return this.size;
  }
}

let tree = new BinarySearchTree();

let arr = [];
for (let a = 1; a < 1001; a++) {
  arr.push(a);
}

arr.forEach((e) => {
  tree.insert(e * Math.floor(Math.random() * 9 + 1));
});

console.log(tree.lookup(100));
// console.log(tree.insert(2));
console.log(tree.minValueNode());
console.log(tree.maxValueNode());

console.log(tree);
