// 效率可达到O(N*log(n))
Array.prototype.median = function (left, right) {
  // 1.选择枢纽
  let center = Math.floor((left + right) / 2)
  // 2.判断大小交换位置
  if (this.arr[left] > this.arr[center]) {
    this.swap(left, right)
  }
  if (this.arr[center] > this.arr[right]) {
    this.swap(center, right)
  }
  if (this.arr[left] > this.arr[right]) {
    this.swap(left, right)
  }
  // 3.将枢纽放在倒数第二位
  this.swap(center, right - 1)
  return this.arr[right - 1]
}
Array.prototype.quick = function (left, right) {
  if (left >= right) return
  let pivot = this.median(left, right)
  // 定义左右指针
  let i = left
  let j = right - 1
  while (true) {
    while (this.arr[++i] < pivot) {}
    while (this.arr[--j] > pivot) {}
    if (i < j) {
      this.swap(i, j)
    } else {
      break
    }
    // 将枢纽放置在正确的位置
    this.swap(i, right - 1)

    // 分而治之
    this.quick(left, i - 1)
    this.quick(i + 1, right)
  }
}
Array.prototype.quickSort = function () {
  this.quick(0, this.arr.length - 1)
}
