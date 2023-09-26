// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    let node = new TreeNode(val);
    if(this.root === null){
      this.root = node;
    }else{
      if(val < currentNode.val){
        if(currentNode.left === null){
          currentNode.left = node;
        }else{
          this.insert(val, currentNode.left);
        }
      } if (val > currentNode.val) {
        if (currentNode.right === null) {
          currentNode.right = node;
        } else {
          this.insert(val, currentNode.right);
        }
      }
    }

  }

  search(val) {
    function recursiveSearch(val, root){
      if(root === null){
        return false;
      }else{
        if(root.val === val){
          return true;
        }else if(root.val > val){
          return recursiveSearch(val, root.left);
        }else{
          return recursiveSearch(val, root.right);
        }
      }
    }
    return recursiveSearch(val, this.root);
  }

//prints node first, then vistis left and right nodes
  preOrderTraversal(currentNode = this.root) {
    if(currentNode.left === null && currentNode.right === null){
      console.log(currentNode.val)
      return;
    }else{
      console.log(currentNode.val);
      if(currentNode.left){
        this.preOrderTraversal(currentNode.left);
      }if(currentNode.right){
        this.preOrderTraversal(currentNode.right);
      }
    }
  }

  //visits left node, prints current node, then right node 
  inOrderTraversal(currentNode = this.root) {
    if(currentNode.left && currentNode.right === null){
      console.log(currentNode.val);
      return;
    }else{
      if(currentNode.left){
        this.inOrderTraversal(currentNode.left);
      }
      console.log(currentNode.val);
      if(currentNode.right){
        this.inOrderTraversal(currentNode.right);
      }
    }
  }

//left and right nodes then current node 
  postOrderTraversal(currentNode = this.root) {
    if(currentNode.left === null && currentNode.right === null){
      console.log(currentNode.val);
    }else{
      if(currentNode.left){
        this.postOrderTraversal(currentNode.left);
      }if(currentNode.right){
        this.postOrderTraversal(currentNode.right);
      }
      console.log(currentNode.val);
    }
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    let stack = [this.root];
    while (stack.length !== 0) {
      let node = stack.shift();
      console.log(node.val);
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    let stack = [this.root];
    while(stack.length !== 0){
      let node = stack.pop();
      console.log(node.val);
      if (node.left) {
        stack.push(node.left);
      }
      if(node.right){
        stack.push(node.right);
      }
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };