Function.prototype.mycall = function (context) {
  context = context || window
  const fn = Symbol('fn')
  context[fn] = this
  const args = [...arguments].slice(1)
  let res = context.fn(...args)
  delete context.fn
  return res
}
Function.prototype.myBind = function (context) {
  context = context || window
  const _this = this
  let args1 = [...arguments].slice(1)
  const fn = function () {
    let args = args1.concat([...arguments])
    _this.apply(this instanceof fn ? this : context, args)
  }
  return fn
}
function myNew(func) {
  let obj = {}
  obj.__proto__ = func.prototype
  obj.apply(this, [...arguments].slice(1))
  return res instanceof Object ? res : obj
}
