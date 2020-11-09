//组合继承，原型链实现对原型的属性和方法继承，借用构造函数实现对实例属性的继承
//但会使用两次构造函数
function Animal(name) {
  this.name = name
  this.acts = ['walk', 'jump', 'watch']
}
Animal.prototype.sayName = function () {
  console.log(this.name)
}
function Cat(name, color) {
  Animal.call(this, name)
  this.color = color
}
Cat.prototype = new Animal()
Cat.prototype.constructor = Cat
Cat.prototype.sayColor = function () {
  console.log(this.color)
}

let ins1 = new Cat('mimi', 'white')
ins1.acts.push('climb')
console.log(ins1.acts)
ins1.sayColor()
ins1.sayName()

let ins2 = new Cat('didi', 'origin')
console.log(ins2.acts)
ins2.sayColor()
ins2.sayName()
