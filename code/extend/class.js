class Animal {
  constructor(color) {
    this.color = color
  }
  greet(sound) {
    console.log(sound)
  }
}
class Dog extends Animal {
  constructor(color) {
    super(color)
    this.color = color
  }
}

let dog = new Dog('黑色')

dog.greet('汪汪') // "汪汪"
