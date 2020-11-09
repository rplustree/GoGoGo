//原型链继承
//原型的属性会被共用，且子类无法向构造函数传参
function Animal() {
  this.name = 'aninmal'
  this.type = ['cat', 'pig']
}

Animal.prototype.greet = function (sound) {
  console.log(sound)
}

function Dog() {
  this.name = 'dog'
}

Dog.prototype = new Animal()

let papi = new Dog()
papi.greet('汪汪')
console.log(papi.type)
