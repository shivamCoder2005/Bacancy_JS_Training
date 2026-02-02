// prototype in class and object

class Animal {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello My name is ${this.name}`);
  }
}

const newAnimal = new Animal("tommy");
console.log(newAnimal.__proto__);
console.log(Animal.prototype);

// when fresh new object is created 
// obj.__proto__ == class.prototype

// __proto__ vs .prototype :-

// .prototype belongs to constructor functions / classes
// __proto__ belongs to objects (instances) helps in inheritence
// newAnimal.__proto__ = Animal.prototype
// newAnimal.__proto__.__proto__ = Object.prototype

// a1
//  ├── name: "tiger"
//  └── __proto__ → Animal.prototype
//                        ├── greet()
//                        └── constructor

// .prototype (Blueprint storage)

// Exists before any object is created
// Used to store shared methods
// Used only during object creation

// __proto__ (Live lookup link)

// Exists on every object
// Used during method/property lookup
// Created automatically at new

// prototype in array

const arr = [1, 2, 3];
console.log(arr.__proto__);
console.log(Array.prototype);

// both will be same arr.__proto__ = Array.prototype

// to add method and property to all array
// directly add it to Array class defination using Array.prototype

Array.prototype.greet = function () {
  console.log("Hi i am Array");
};

arr.greet();

// main base Objects
// Object, Array, Function, String, Number, Boolean, Date, RegExp, Error, Promise, Map, Set
// avaScript has one base object (Object), and everything else is built on top of it using prototypes.

class Car {
  constructor(name) {
    this.name = name;
  }

  greet() {
    print(`hi from Car ${this.name}`);
  }
}

class ElectricCar extends Car {
  constructor(name, model) {
    super(name);
    this.brand = model;
  }

  run() {
    print("Electric car runs.....");
  }
}

const car = new Car("maruti");
const ecar = new ElectricCar("tesla", "S5");

// every class have both property __proto__ and prototype

// class.prototype shows the blueprint for instances
// class.__proto__ shows that from which class it inherits, show parent class.prototype (blueprint)
// In JavaScript, all classes are functions, and they inherit from Function.prototype.

// ElectricCar.__proto__ = Car.prototype
// Car.__proto__ = Function.prototype


/*

*/