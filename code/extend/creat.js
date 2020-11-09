// 创建一个空对象，空对象的原型为creat()参数：
function creat(proto) {
  function F() {
    F.prototype = proto
  }
  return new F()
}
