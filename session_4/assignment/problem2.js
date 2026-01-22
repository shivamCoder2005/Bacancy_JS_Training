// problem 2

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Intent: Dog should inherit from Animal
Dog.prototype = Animal.prototype;

Dog.prototype.bark = function() {
  console.log("Woof!");
};

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");

genericAnimal.bark(); // Why does this happen?
genericAnimal.eat()
myDog.eat()
console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?

// explanation:-

// Core Problem in This Code
// Dog.prototype = Animal.prototype;

// Two-way inheritance
// Dog and Animal now behave like the same type.
// both shares the same memory both can access each other methods and properties

// Q1) genericAnimal.bark(); works because both shares the same memory

// Q2) console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?

// Default :- Animal.prototype.constructor === Animal
// But when we do:
// Dog.prototype = Animal.prototype;
// we overwrite Dog.prototype, losing:
// Dog.prototype.constructor === Dog