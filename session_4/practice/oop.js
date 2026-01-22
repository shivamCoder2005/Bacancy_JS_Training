// older way of creating class using function (pre ES6)

function Greet(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`hello my name is ${this.name} and i am ${this.age} years old`);
  };
}

const user1 = new Greet("shivam", 21);
const user2 = new Greet("manav", 18);

user1.greet();
user2.greet();


// new way of creating class (Recommanded ES6+)

class Greet2 {
  constructor(name, age) {
    ((this.name = name), (this.age = age));
  }

  greet() {
    console.log(`hello my name is ${this.name} and i am ${this.age} years old`);
  }
}

const user11 = new Greet2("shivam", 21);
const user22 = new Greet2("manav", 18);

user11.greet()
user22.greet()

// using old function constructor (pre ES6)
console.log(user1.greet===user2.greet) // false

// using class (ES6+)
console.log(user11.greet===user22.greet) // true

// conclusion:
// we can prove that 
// function constructor create different function in memory for every object
// class share the function in memory for every object

