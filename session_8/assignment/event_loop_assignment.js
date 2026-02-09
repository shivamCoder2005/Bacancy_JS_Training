// ### Code Block 1: Basic Async


console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


Promise.resolve().then(function() {
 console.log("3");
});


console.log("4");

// Output : 1,4,3,2

// Explanation :- 1 logs
                // timer goes to macroqueue
                // promise goes to microqueue
                // 4 logs
                // promise resolve from microqueue first 3 logs
                // timer resolve from macroqueue 2 logs


// ### Code Block 2: Nested Async

console.log("Start");


setTimeout(function() {
 console.log("Timeout 1");
  Promise.resolve().then(function() {
   console.log("Promise 1");
 });
}, 0);


Promise.resolve().then(function() {
 console.log("Promise 2");
  setTimeout(function() {
   console.log("Timeout 2");
 }, 0);
});


console.log("End");


// Output : Start End Promise2 Timeout1 Promise1 Timeout2

// Explanation : 
// Start logs
// Timeout 1 register to macroqueue
// promise 2 register to microqueue
// End logs
// Promise2 logs
// Timeout 2 register to macroqueue
// Timeout 1 logs
// Promise 1 registr to microqueue
// promise1 logs
// Timeout 2 logs


// ### Code Block 3: Multiple Microtasks

console.log("A");


Promise.resolve().then(function() {
 console.log("B");
  Promise.resolve().then(function() {
   console.log("C");
 });
  console.log("D");
});


Promise.resolve().then(function() {
 console.log("E");
});


setTimeout(function() {
 console.log("F");
}, 0);


console.log("G");

// output:-  A G B D E C F

// Explanation:

// A logs
// Promise B register to micro queue
// Promise E register to micro queue
// Timer F register to macro queue
// G logs
// Promise B resolved and logs B 
// then Promise C register to micro queue
// D logs
// Proimse E resolved E logs
// Promise C resolved C logs
// now microqueue is completely empty now macroqueue get chance
// F logs


// ### Code Block 4: Complex Async Chain


console.log("1");

setTimeout(function() {
 console.log("2");
}, 0);

queueMicrotask(function() {
 console.log("3");
});

Promise.resolve().then(function() {
 console.log("4");
  queueMicrotask(function() {
   console.log("5");
 });
});

setTimeout(function() {
 console.log("6");
}, 0);


console.log("7");

// Output : 1 7 3 4 5 2 6

// Explanation:
// 1 logs
// timer 2 register into macrotask queue
// 3 register to micro task queue
// Promise 4 register to micro task queue 
// timer 6 register to macro task queue 
// 7 logs
// 3 logs (from micro task queue)
// 4 logs (from micro task queue)
// again microtask 5 is added to microtask queue 
// 5 logs (from micro task queue)
// now it is empty macro task queue get chance to run
// 2 logs
// 6 logs

// ### Code Block 5: Async/Await

console.log("Start");


async function asyncFunction() {
 console.log("Async 1");
  await Promise.resolve();
 console.log("Async 2");
}


asyncFunction();


Promise.resolve().then(function() {
 console.log("Promise 1");
});


setTimeout(function() {
 console.log("Timeout");
}, 0);


console.log("End");

// output : Start Async1 End Async2 Promise1 End

// Explanation

// Start logs
// async function is called
// Async1 logs
// await hit js stop the execution of current block untill promise is resolved 
// and leave the current block
// Promise 1 register to micro task queue
// Timeout register to macro task queue
// End logs
// Promise resolved Async2 logs
// Promise1 logs (from micro task queue)
// Timeout logs (from macro task queue)

