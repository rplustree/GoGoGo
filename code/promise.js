class Promise {
  constructor(executor) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []
    let resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        this.onResolveedCallbacks.forEach((fn) => fn())
      }
    }
    let reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        this.onRejectedCallbacks.forEach((fn) => fn())
      }
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  then(onFulfilled, onRejected) {
    let promise2 = new Promise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        let x = onFulfilled(this.value)
        resolvePromise(promise2, x, resolve, reject)
      }
      if (this.state === 'rejected') {
        let x = onRejected(this.reason)
        resolvePromise(promise2, x, resolve, reject)
      }
      if (this.state === 'pending') {
        this.onResolveedCallbacks.push(() => {
          let x = onFulfilled(this.value)
          resolvePromise(promise2, x, resolve, reject)
        })
        this.onRejectedCallbacks.push(() => {
          let x = onRejected(this.reason)
          resolvePromise(promise2, x, resolve, reject)
        })
      }
    })
    return promise2
  }
  static all(promises) {
    return new Promise((resolve, reject) => {
      const result = []
      let count = 0
      if (promises.length === 0) {
        resolve(result)
        return
      }
      promises.forEach((item, index) => {
        this.resolve(item).then(
          (res) => {
            result[index] = res
            count++
            if (count === promises.length) {
              resolve(result)
            }
          },
          (err) => {
            reject(err)
          }
        )
      })
    })
  }
  static race(promises) {
    return new Promise((resolve, reject) => {
      if (promises.length === 0) {
        resolve([])
        return
      }
      promises.forEach((item) => {
        this.resolve(item).then(
          (res) => resolve(res),
          (err) => {
            reject(err)
          }
        )
      })
    })
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (x === promise2) {
    return reject(new TypeError('Chaining cycle detected for promise'))
  }
  let called
  if (x != null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call((x, y) => {})
      }
    } catch (error) {}
  }
}
