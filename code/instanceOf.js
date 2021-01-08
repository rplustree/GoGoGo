function instance_of(L, R) {
  //L 表示左边的object，R 表示右边的constructor
  const R_P = R.prototype // 取 R 的显式原型
  L = L.__proto__ // 取 L 的隐式原型,并且可能会顺着原型链重新赋值
  while (true) {
    if (L === null) return false
    if (R_P === L)
      // 这里重点：严格比较 true
      return true
    L = L.__proto__
  }
}
