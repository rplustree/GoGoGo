function Animal(color) {
  this.color = color
  this.name = 'animal'
  this.type = ['pig', 'cat']
}
Animal.prototype.greet = function (sound) {
  console.log(sound)
}
function Dog(color) {
  Animal.apply(this, arguments)
  this.name = 'dog'
}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog
Dog.prototype.getName = function () {
  console.log(this.name)
}
var dog = new Dog('白色')
var dog2 = new Dog('黑色')
dog.type.push('dog')

console.log(dog.color) // "白色"
console.log(dog.type) // ["pig", "cat", "dog"]
console.log(dog2.type) // ["pig", "cat"]
console.log(dog2.color) // "黑色"

dog.greet('汪汪') //  "汪汪"
