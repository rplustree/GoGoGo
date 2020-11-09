//借用构造函数，子类的构造函数中调用父类的父类的构造函数(call()或apply())
//方法都在构造函数中定义，无法函数复用，无法使用父类的原型方法
function Animal() {
  this.acts = ['run', 'walk', 'jump']
}
function Cat() {
  Animal.call(this)
}
let mimi = new Cat()
mimi.acts.push('climb')
console.log(mimi.acts)

let didi = new Cat()
didi.acts.push('sing')
console.log(didi.acts)
