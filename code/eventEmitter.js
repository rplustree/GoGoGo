class eventEmitter {
  constructor() {
    this.events = new Map()
  }
  addEvent(key, fn, isOnce, ...args) {
    const value =
      this.events.get(key) || this.events.set(key, new Map()).get(key)
    value.set(fn, (...args1) => {
      fn(...args, ...args1)
      isOnce && this.off(key, fn)
    })
  }
  on(key, fn, ...args) {
    if (!fn) {
      return console.error('没有回调函数')
    }
    this.addEvent(key, fn, false, ...args)
  }
  once(key, fn, ...args) {
    this.addEvent(key, fn, true, ...args)
  }
  off(key, fn) {
    if (this.events.get(key)) {
      this.events.get(key).delete(fn)
    }
  }
  emit(key, ...args) {
    if (!this.events.get(key)) {
      console.warn('没有该事件')
      return
    }
    for (let cb of this.events.get(key).values()) {
      cb(...args)
    }
  }
}
