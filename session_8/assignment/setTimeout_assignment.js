// ### Exercise 1: Basic setTimeout

// **Task:** Create a function that logs numbers 1 to 5, with a 1-second delay between each number.

// way 1
// function printNum(n, delay) {
//   for (let i = 1; i <= n; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// printNum(5, 1000);

// way 2 using setInterval and closures

// function printNum(n, delay) {
//   let count = 1;
//   const id = setInterval(() => {
//     if (count > n) {
//       clearInterval(id);
//       return;
//     }
//     console.log(count);
//     count++;
//   }, delay);
// }

// ### Exercise 2: setTimeout in Loop (Fix the Bug)

// **Task:** Fix the following code so it logs 0, 1, 2 instead of 3, 3, 3.

// BUGGY CODE - Fix this
// for (var i = 0; i < 3; i++) {
//  setTimeout(function() {
//    console.log(i); // Currently logs: 3, 3, 3
//  }, 1000);
// }

// fix : var is not block scope so it does not create seperate var for each block iteration
//       use let becuse it is block scope it create new let for each block iteration
//       to fix this we need to use let

// fix code

// for (let i = 0; i < 3; i++) {
//  setTimeout(function() {
//    console.log(i); // Currently logs: 0,1,2
//  }, 1000);
// }

// ### Exercise 3: setTimeout with Clear
// **Task:** Create a countdown timer that counts from 10 to 0, then stops.

// way 1
// function countdown(n){
//     for(let i = n ;i >0;i--){
//         setTimeout(()=>{
//             console.log(i)
//         },(n-i)*1000)
//     }
// }

// countdown(5)

function countdown(n) {
  let delay = 0;
  for (let i = n; i > 0; i--) {
    ((delay = (n - i) * 1000),
      setTimeout(() => {
        console.log(i);
      }));
  }
}

countdown(5);
