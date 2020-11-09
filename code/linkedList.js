function LinkedList() {
  // 定义节点
  function Node(val) {
    this.val = val
    this.next = null
  }
  // 初始化长度
  this.length = 0
  // 初始化头节点,新元素插入后头部节点指针指向新元素
  this.head = new Node('head')
  // 查找节点
  this.find = function find(item) {
    let cur = this.head
    while (cur.val !== item) {
      cur = cur.next
    }
    return cur
  }
  // 查找节点前一个结点
  this.pre = function pre(item) {
    let cur = this.head
    while (!(cur.next === null) && cur.next.val !== item) {
      cur = cur.next
    }
    return cur
  }
  // 插入节点
  this.insert = function insert(newVal, item) {
    let newNode = new Node(newVal)
    let cur = this.find(item)
    newNode.next = cur.next
    cur.next = newNode
  }
  // 删除节点
  this.remove = function remove(item) {
    let preNode = this.pre(item)
    if (preNode.next) {
      preNode.next = preNode.next.next
    }
  }
  // 尾部添加节点
  this.append = function append(newVal) {
    let newNode = new Node(newVal)
    let cur = this.head
    if (!this.head.next) {
      this.head.next = newVal
    }
    while (cur.next) {
      cur = cur.next
    }
    this.length++
  }
}
