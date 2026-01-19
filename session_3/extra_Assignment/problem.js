// problem using map,filter and reduce

// problem 1
// task : Group students based on their grade.

//Input:
// [
//   { name: "Aman", grade: "A" },
//   { name: "Riya", grade: "B" },
//   { name: "Karan", grade: "B" }
//   { name: "Shivam", grade: "A" },
//   { name: "Manav", grade: "C" },
//   { name: "Parth", grade: "C" }
// ]

// Output:
// {
//   A: ["Aman", "Shivam"],
//   B: ["Riya","Kiran"],
//   C: ["Manav","Parth"]
// }

const students = [
  { name: "Aman", grade: "A" },
  { name: "Riya", grade: "B" },
  { name: "Karan", grade: "B" },
  { name: "Shivam", grade: "A" },
  { name: "Manav", grade: "C" },
  { name: "Parth", grade: "C" },
];

const gradeHistory = students.reduce((obj, student) => {
  if (obj[student.grade]) {
    obj[student.grade].push(student.name);
  } else {
    obj[student.grade] = [student.name];
  }
  return obj;
}, {});

console.log(gradeHistory);

// problem 2:-
// Find the Most Expensive Product (reduce) Return the product with the highest price.

// Input:
// [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 },
//   { name: "Tablet", price: 30000 }
// ]

// Output:
// { name: "Laptop", price: 50000 }

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 30000 },
];

const myProduct = products.reduce((acc, product) => {
  if (!acc || product.price > acc.price) return product;
  return acc;
}, null);

console.log(myProduct);

// problem 3:-
// Flatten a nested array one level deep and calculate the sum

// Input: [[1, 2], [3, 4], [5]]
// Output: 15

const nested_arr = [[1, 2], [3, 4], [5]];

const flatten_arr = nested_arr.reduce((acc, curr) => {
  return [...acc, ...curr];
}, []);

console.log(flatten_arr);

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
