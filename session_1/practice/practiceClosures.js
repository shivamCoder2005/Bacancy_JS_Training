// task 1 :- print 1 to 5 every 5 second

// for (var i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// output :- print 6 every time becuae var is function scope not block scope so their is only one copy of i in every iteration

// fix using let
// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// fix using var iteself
// for (var i = 1; i <= 5; i++) {
//   function run(i) { // new copy of i
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   run(i);
// }

// works becuase here we have different i for every run function call

// Task 2:- print 1 after 1sec 2 after 2sec 3 after 3sec and so on

// solution 1:-
// const items = [1, 2, 3, 4, 5];
// async function run() {
//   for (let item of items) {
//     await timerlogs(item, item * 1000);
//   }
// }

// function timerlogs(val, time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(val);
//       resolve();
//     }, time);
//   });
// }

// run();

// solution 2 :-
// async function run() {
//   for (let i = 1; i <= 5; i++) {
//     await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log(i);
//         resolve();
//       }, i * 1000);
//     });
//   }
// }

// run();
