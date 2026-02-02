// problems on this keyword

// problem : 1

let x = 10;

const obj = {
  x: 20,
  func() {
    console.log(x);
    console.log(this.x);
  },
  arrowFunc: () => {
    console.log(x);
    console.log(this.x);
  },
};

obj.func(); // 10 20
obj.arrowFunc(); // 10 undefined

// reason :-
// x:20 is property not a variable only accessible through this.x or obj.x

// problem 2:-

const user = {
  name: "Aman",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
  greet2() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

user.greet();
user.greet2();

// reason:-

// In greet() : the setTimeout callback is called later by the environment,
//              and it is NOT called as a method of your object,
//              so this defaults to the global object (window in browser).

// In greet2() : arrow function does not have this, take from nearest function scope
//              here nearest function is greet2 which this refers to user object


