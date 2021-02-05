// 柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数且返回结果的新函数的技术
// 参数复用，提前调用，延迟执行
// add(1)(2, 4)(6) = 12
function curry(fn, currArgs) {
  let allArgs = []
  return function next() {
    let args = Array.prototype.slice.call(arguments)
    if (args.length > 0) {
      allArgs = allArgs.concat(args)
      return next
    } else {
      return next.apply(null, args)
    }
  }
}
