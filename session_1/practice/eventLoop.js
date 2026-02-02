
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
