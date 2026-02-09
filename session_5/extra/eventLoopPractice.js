// Absolute Priority Order (Node.js)
// Inside one event loop tick:

// process.nextTick  (highest priority – runs IMMEDIATELY)
// Promise.then      (microtask queue)
// -----------------
// Timers            (setTimeout)
// I/O callbacks
// setImmediate      (check phase)
// -----------------
// (next tick again → nextTick → promises → ...)

// problem 1

// console.log("A"); // 1

// setTimeout(() => {
//   console.log("B"); // 5
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("C"); // 3
//   })
//   .then(() => {
//     console.log("D"); // 4
//   });

// console.log("E"); // 2

// ------------------------------------------------------------------------------------------------------

// problem 2 :- Promise inside Promise + Timer

// console.log("start"); // 1

// Promise.resolve().then(() => {
//   console.log("p1"); // 3

//   setTimeout(() => {
//     console.log("t1"); // 6
//   }, 0);

//   Promise.resolve().then(() => {
//     console.log("p2"); // 4
//   });
// });

// setTimeout(() => {
//   console.log("t2"); // 5
// }, 0);

// console.log("end"); // 2

// ------------------------------------------------------------------------------------------------------


// problem 3

// console.log("A");

// new Promise((resolve) => {
//   console.log("B");
//   resolve();
// }).then(() => {
//   console.log("C");
// });

// setTimeout(() => {
//   console.log("D");
// }, 0);

// console.log("E");

// ------------------------------------------------------------------------------------------------------

// Problem 4: Promise constructor trap

// console.log("A"); // 1

// new Promise((resolve) => {
//   console.log("B"); // 2
//   resolve();
// }).then(() => {
//   console.log("C"); // 4
// });

// setTimeout(() => {
//   console.log("D"); // 5
// }, 0);

// console.log("E"); // 3

// Explanation:-
// Promise constructor runs synchronously
// .then() → microtask

// ------------------------------------------------------------------------------------------------------

// Problem 5: Nested microtasks

// Promise.resolve()
//   .then(() => {
//     console.log("1"); // 2
//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log("2"); // 4
//   });

// Promise.resolve().then(() => {
//   console.log("3"); // 3
// });

// console.log("4"); // 1

// Explanation:-

// Rule of .then():
// If you return a normal value → next .then() runs immediately
// If you return a promise → next .then() waits for it

// Even though Promise.resolve() resolves immediately, it still:
// schedules the next .then() as a new microtask
// after the current microtask finishes
// So .then(() => console.log("2")) is queued later, not immediately.

// ------------------------------------------------------------------------------------------------------

// problem 6

// console.log("start");

// // race condition for settimeout and promise becuase both execute after 1sec

// setTimeout(() => {
//   console.log("timer 1s");
// }, 1000);

// function getPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("promise resolved");
//       resolve();
//     }, 1000);
//   }).then(() => {
//     console.log("Hello");
//   });
// }

// async function main() {
//   console.log("before await");

//   await getPromise();

//   console.log("after await");
// }

// main();

// console.log("end");

// output
// start
// before await
// end
// timer 1s
// promise resolved
// Hello
// after await

// ------------------------------------------------------------------------------------------------------

// problem 7

// console.log("A"); 

// async function foo() {
//   console.log("B");

//   await Promise.resolve().then(() => {
//     console.log("C");
//     Promise.resolve().then(() => {
//       console.log("D");
//     });
//   });

//   console.log("E");

//   await Promise.resolve();

//   console.log("F");
// }

// foo();

// Promise.resolve().then(() => {
//   console.log("G");

//   Promise.resolve().then(() => {
//     console.log("H");
//   });
// });

// setTimeout(() => {
//   console.log("I");
// }, 0);

// console.log("J");

// output
// A
// B
// J
// C
// G
// D
// E
// H
// F
// I

// Explanation
// await does NOT enqueue the continuation immediately.
// It enqueues it only after the awaited promise settles, as a new microtask.

// ------------------------------------------------------------------------------------------------------

// problem 8

// async function asyncTask() {
//   console.log('Async Start'); // 2. Synchronous
//   await Promise.resolve();    // Execution pauses here, rest moves to Microtask Queue
//   console.log('Async End');   // 4. Microtask
// }

// console.log('Start');         // 1. Synchronous

// setTimeout(() => {
//   console.log('Timeout 1');   // 6. Macrotask

//   setTimeout(() => {
//     console.log('Timeout 2'); // 10. Macrotask (queued after T1 & T3 runs)
//   }, 0);

//   Promise.resolve().then(() => {
//     console.log('Promise 1'); // 7. Microtask (runs before next Macrotask)
//   });
// }, 0);

// asyncTask();

// Promise.resolve().then(() => {
//   console.log('Promise 2');   // 5. Microtask
// });

// setTimeout(() => {
//   console.log('Timeout 3');   // 8. Macrotask

//   setTimeout(() => {
//     console.log('Timeout 4'); // 11. Macrotask (queued after T1 & T3 & T2 runs)
//   }, 0);

//   Promise.resolve().then(() => {
//     console.log('Promise 2'); // 9. Microtask (runs before next Macrotask)
//   });
// }, 0);


// console.log('End');           // 3. Synchronous


// ------------------------------------------------------------------------------------------------------

// problem 9

// Promise.resolve().then(() => {
//   console.log("P1"); // 2

//   process.nextTick(() => {
//     console.log("N1"); // 4
//   });
// });

// Promise.resolve().then(() => {
//   console.log("P2"); // 3
// });

// console.log("S"); // 1

// ------------------------------------------------------------------------------------------------------

// problem 10

// let count = 0;

// function tick() {
//   if (count < 3) {
//     process.nextTick(tick);
//     console.log("tick", count++);
//   }
// }

// tick();

// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// output

// tick 0
// tick 1
// tick 2
// timeout

// ------------------------------------------------------------------------------------------------------

// problem 11

// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// setImmediate(() => {
//   console.log("immediate");
// });

// Explanation
// output:- NON-DETERMINISTIC

// From main module, order is not guaranteed
// Depends on system timing
// But inside I/O → deterministic

// ------------------------------------------------------------------------------------------------------

// problem 12

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   setTimeout(() => {
//     console.log("timeout"); // 2
//   }, 0);

//   setImmediate(() => {
//     console.log("immediate"); // 1
//   });
// });

// -----------------------------------------------------------------------------------------------

// problem 13

// console.log("A");

// async function main() {
//   console.log("B");

//   setTimeout(() => {
//     console.log("C");

//     Promise.resolve().then(() => {
//       console.log("D");
//     });

//   }, 0);

//   await Promise.resolve().then(() => {
//     console.log("E");

//     setTimeout(() => {
//       console.log("F");
//     }, 0);
//   });

//   console.log("G");

//   queueMicrotask(() => {
//     console.log("H");
//   });
// }

// main();

// Promise.resolve().then(() => {
//   console.log("I");

//   queueMicrotask(() => {
//     console.log("J");
//   });
// });

// setTimeout(() => {
//   console.log("K");

//   Promise.resolve().then(() => {
//     console.log("L");
//   });

// }, 0);

// queueMicrotask(() => {
//   console.log("M");
// });

// console.log("N");



console.log("start");

process.nextTick(() => {
  console.log("nextTick1");

  Promise.resolve().then(() => {
    console.log("promise1");
  });
});

Promise.resolve().then(() => {
  console.log("promise2");

  process.nextTick(() => {
    console.log("nextTick2");
  });
});

console.log("end");
