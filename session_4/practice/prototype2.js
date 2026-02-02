class Parent{
  constructor(name){
    this.name = name
  }
}

class Child extends Parent{
  constructor(name,age){
    super(name)
    this.age = age
  }
}

const c1 = new Child("shivam",21)

console.log(c1.__proto__)