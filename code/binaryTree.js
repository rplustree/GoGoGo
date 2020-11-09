// 树的结构
function Node(data, left, right) {
  this.data = data
  this.left = left
  this.right = right
}
function BST() {
  this.root = null
  this.insert = insert
}
function insert(data) {
  let newData = new Node(data, null, null)
  if (this.root === null) {
    this.root = newData
  } else {
    let current = this.root
    while (true) {
      if (current.data > data) {
        if (current.left === null) {
          current.left = data
          break
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = data
          break
        }
        current = current.right
      }
    }
  }
}
// 二叉树的遍历-递归

// 前序遍历
function preTravel(node) {
  if (node) {
    console.log(node.data)
    preTravel(node.left)
    preTravel(node.right)
  }
}
// 中序遍历
function midTravel(node) {
  if (node) {
    preTravel(node.left)
    console.log(node.data)
    preTravel(node.right)
  }
}
// 后序遍历
function postTravel(node) {
  if (node) {
    preTravel(node.left)
    preTravel(node.right)
    console.log(node.data)
  }
}
// 非递归
// 深度优先遍历
function depthFirst(node) {
  let stack = []
  stack.push(node)
  while (stack.length) {
    let top = stack.pop()
    console.log(top)
    if (top.right) {
      stack.push(top.right)
    }
    if (top.left) {
      stack.push(top.left)
    }
  }
}
// 广度优先遍历
function breadthFirst(node) {
  let queue = []
  queue.push(node)
  while (queue.length) {
    let head = queue.shift()
    console.log(head)
    if (head.left) {
      queue.push(head.left)
    }
    if (head.right) {
      queue.push(head.right)
    }
  }
}
