// "use strict";

// ** this case 1 **
// console.log(this) // window object

// ** this case 2 **
// this always refer to the caller object

// function demo() {
//   console.log(this);
// }

// demo() // here caller object is window for ex window.demo()

// ** this case 3 **

// var name = "manav";
// const user = {
//   name: "shivam",
//   print: function () {
//     console.log(this.name);
//   },
// };

// // user.print() // shivam

// const myprint = user.print;
// myprint();  manav

// becuase var are store in global(window)
// if we use let in strict mode we have error beacuse let,const are store in script not global
// but in non strict mode just empty line

// ** this case 4 **

// const newuser = {
//   propx: "name1",
//   newuser2: {
//     propx: "name2",
//     printarrow: () => {
//       console.log(this.propx);
//     },
//     print() {
//       console.log(this.propx);
//     },
//   },
//   print() {
//     console.log(this.propx);
//   },
//   printarrow: () => {
//     console.log(this.propx);
//   },
// };

// newuser.print(); // name1
// newuser.printarrow(); // undefined
// newuser.newuser2.print(); // name2
// newuser.newuser2.printarrow(); // undfined

// Arrow functions behave differently with `this`.
// They do NOT have their own `this`.
// Instead, they capture `this` from the nearest enclosing FUNCTION or MODULE scope.

// Remember:
// - Functions (and modules) create lexical scope for `this`
// - Blocks create lexical scope for variables, but NOT for `this`
// - Objects do NOT create lexical scope

// example 1 for function scope

// const myobj = {
//   myprop: "abc",
//   myfunc: function () {
//     const myarrow = () => {
//       console.log(this);
//       console.log(this.myprop);
//     };
//     myarrow();
//   },
// };

// myobj.myfunc(); // window abc

// here myarrow takes this of nearest lexical scope here myfunc have that
// so take this of myfunc
// myobj is caller object of myfunc so it take this as myobj

// example 2 for blocks scope

// {
//   let x = 1;
//   const arrow = () => console.log(this);
// }

//Arrow still looks outside the block.

// ** this case 5 **

// var doc = "this keyword doc";
// const obj = {
//   doc: "JS",
//   printName: function () {
//     return this.doc;
//   },
//   printNameArrow: () => {
//     return this.doc;
//   },
//   IIFE: (function () {
//     // console.log(this)
//     return this.doc;
//   })(),
//   IIFEArrow: (() => {
//     // console.log(this)
//     return this.doc;
//   })(),
// };

// console.log(obj.printName()); // JS
// console.log(obj.printNameArrow()); // this keyword doc
// console.log(obj.IIFE); // this keyword doc
// console.log(obj.IIFEArrow); // this keyword doc

// IIFE functions :- even though it sits inside the object, it executes immediately as a
// standalone function call during the object's creation, not as a method call.
// IIFEArrow also executes immediately, and like all arrow functions,
// it captures this from the enclosing global scope.

//---------------------------------------------------------------------------------------------------

// OUT OF TOPIC

// Question:- window does not contains propx so it should throw error why so undefined

// Answer:- js internal implementation if we try to acess key which does not exist give undefined
//          throw error only when we try to do some operation with that undefined values

// example

// const demoobj = {
//   name: "shivam",
// };

// console.log(demoobj.age); // undefined
// console.log(demoobj.age.toString()); // error

//---------------------------------------------------------------------------------------------
