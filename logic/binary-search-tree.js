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

    if (this.root === null) {
      // check if root exists
      // we compare it to null, because it could be zero
      // we dont want false postive comparison

      // set root = new node
      this.root = newNode;
      this.size++;
      return this;
    }

    // set active
    let activeRoot = this.root;

    while (true) {
      // run infinite loop to itterate over bst nodes.

      if (value === activeRoot.value) {
        // if new value is equal to active node value
        return this;
      }

      // check if new node belongs to left or right of the root
      if (value < activeRoot.value) {
        // belongs to left

        if (activeRoot.left === null) {
          // if not more nodes to the left
          // set left to new node
          // infinite itteration ends
          activeRoot.left = newNode;
          this.size++;
          return this;
        }

        // otherwise keep setting activeRoot = left of activeRoot
        // untill we encounter null (satisfies above if condition)
        activeRoot = activeRoot.left;
      } else if (value > activeRoot.value) {
        // belongs to right
        if (activeRoot.right === null) {
          // if not more nodes to the right
          // set right to new node
          // infinite itteration ends
          activeRoot.right = newNode;
          this.size++;
          return this;
        }

        // otherwise keep setting activeRoot = right of activeRoot
        // until we encounter null (satisfies above if condition)
        activeRoot = activeRoot.right;
      } else {
        return this;
      }
    }
  }

  lookup(value) {
    if (this.root === null) {
      return undefined;
    }

    // set active root variable = current root
    let activeRootNode = this.root;

    while (true) {
      // itterate infinitly over tree nodes

      if (value === activeRootNode.value) {
        // found: return activeRootNode
        return activeRootNode;
      }

      // compare and find out to which side target node belongs
      if (value < activeRootNode.value) {
        // belongs to left
        if (activeRootNode.left === null) {
          // reach end: no more smaller nodes
          // not found
          return undefined;
        }

        // keep setting active root node = left of current active root node
        activeRootNode = activeRootNode.left;
      } else if (value > activeRootNode.value) {
        // belongs to right
        if (activeRootNode.right === null) {
          // reach end: no more bigger nodes
          // not found
          return undefined;
        }

        // keep setting active root node = right of current active root node
        activeRootNode = activeRootNode.right;
      } else {
        return undefined;
      }
    }
  }

  treeMinValue() {
    let activeRootNode = this.root;
    // itterate infinitly over tree nodes
    while (true) {
      // until we have reach tree left end (no more smaller nodes)
      if (activeRootNode.left === null) return activeRootNode;

      // keep setting active root node = left of current active root node
      activeRootNode = activeRootNode.left;
    }
  }

  treeMaxValue() {
    let activeRootNode = this.root;
    // itterate infinitly over tree nodes
    while (true) {
      // until we have reach tree right end (no more bigger nodes)
      if (activeRootNode.right === null) return activeRootNode;

      // keep setting active root node = right of current active root node
      activeRootNode = activeRootNode.right;
    }
  }
}

let tree = new BinarySearchTree();

tree.insert(45);
tree.insert(15);
tree.insert(79);
tree.insert(90);
tree.insert(10);
tree.insert(55);
tree.insert(12);
console.log(tree.lookup(90)); // { left: null, right: null, value: 90 }
console.log(tree.lookup(100)); // undefined
console.log(tree.treeMinValue()); // 10
console.log(tree.treeMaxValue()); // 90
