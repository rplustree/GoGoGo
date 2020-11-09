Function.prototype.myCall = function (context) {
  context = Object(context) || window
  context.fn = this
  const args = Array.prototype.slice.call(arguments, 1)
  let result = context.fn(...args)
  delete context.fn
  return result
}

Function.prototype.myApply = function (context) {
  context = Object(context) || window
  context.fn = this
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}
// 1.改变this
// 2.分次传参
// 3.可用作构造函数
Function.prototype.myBind = function (context) {
  let _this = this
  let args = Array.prototype.slice.call(arguments, 1)
  const fn = function () {
    let args2 = Array.prototype.slice.call(arguments)
    return _this.apply(this instanceof fn ? this : context, args.concat(args2))
  }
  return fn
}
