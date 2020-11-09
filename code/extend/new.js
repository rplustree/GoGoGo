function myNew(fn) {
  let obj = {}
  obj._proto_ = fn.prototype
  let result = fn.apply(obj, arguments)
  return result instanceof Object ? result : obj
}
