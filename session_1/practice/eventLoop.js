// console.log("start");

// // race condition for settimeout and promise becuase both execute after 1sec

// setTimeout(() => {
//   console.log("timer 0ms");
// }, 1000);

// function getPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("promise resolved");
//       resolve();
//     }, 1000);
//   });
// }

// async function main() {
//   console.log("before await");

//   await getPromise();

//   console.log("after await");
// }

// main();

// console.log("end");

// // output :-
// // start
// // before await
// // end
// // timer 0ms
// // promise resolved
// // after await

// starvation for macroqueue
// function loopMicrotask() {
//   queueMicrotask(() => {
//     console.log("micro");
//     loopMicrotask(); // schedules another microtask
//   });
// }

// setTimeout(() => {
//   console.log("timer expires");
// }, 0);

// loopMicrotask();

// solve starvation using setTimeout Only one microtask runs per cycle

// function loopMicrotask() {
//   queueMicrotask(() => {
//     console.log("micro");
//     setTimeout(loopMicrotask, 0); // schedules another microtask
//   });
// }

// setTimeout(() => {
//   console.log("timer expires");
// }, 0);

// loopMicrotask();
