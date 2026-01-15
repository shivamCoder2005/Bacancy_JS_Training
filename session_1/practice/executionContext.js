// exmaple 1
// learning :- if block does not count in new context, only function creates new context

// var a = 5;

// if (true) {
//   console.log(a); // 5
//   var a = 10;
//   console.log(a); // 10
// }

// console.log(a); // 10

let a = 5;

if (true) {
  let a = 10;
  console.log(a); // 10
}

console.log(a); // 5

// example 2 
// learning:- var is always be hoisted at the top of current execution context given code same as

              // var x;
              // if(true){
              //     x = 5;
              //     console.log(x);
              // }

// if(true){
//     var x = 5;
//     console.log(x); // 5
// }
// console.log(x); // 5




// example 3 
// learning:- function creates new execution context

// var a = 5;

// function b() {
//   console.log(a); // 5
//   var a = 10;
//   console.log(a); // 10
// }
// b();
// console.log(a); // 10




