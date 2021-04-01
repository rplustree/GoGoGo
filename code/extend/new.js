function myNew(fn, ...args) {
  let obj = {}
  obj._proto_ = fn.prototype
  // Object.setPrototypeOf(obj, fn.prototype) 等于上一行
  let result = fn.apply(obj, args)
  return result instanceof Object ? result : obj
}
