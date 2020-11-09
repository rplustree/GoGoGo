function debounce(fn, wait, immediate) {
  let timer
  return function () {
    let context = this
    let arg = arguments
    clearTimeout(timer)
    if (immediate) {
      let callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, wait)
      if (callNow) {
        fn.apply(context, arg)
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(context, arg)
      }, wait)
    }
  }
}
function throttle(fn, wait) {
  let timer
  return function () {
    let context = this
    let arg = arguments
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fn.apply(context, arg)
      }, wait)
    }
  }
}
