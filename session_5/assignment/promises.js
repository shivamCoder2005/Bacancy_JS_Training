// task 1 :-
// Write a function downloadFile(url, callback) that simulates a 3-second delay using setTimeout.
// After the delay, log "Download complete: [url]" and execute the callback function.

function downloadFile(url) {
  const id = setInterval(() => {
    console.log("downloading.....");
  }, 100);
  setTimeout(() => {
    clearInterval(id);
    console.log("Download Complete!!!!");
  }, 3000);
}

downloadFile("www.google.com")

// task 2:-
// Create three functions step1, step2, and step3, each accepting a callback and completing after 1second using setTimeout.
// Call them in sequence using nested callbacks.
// Log "All steps finished" only after step3 completes.

function step1() {
  setTimeout(() => {
    console.log("step1 completed");
    function step2() {
      console.log("step2 completed");
    }
    setTimeout(() => {
      step2();
      function step3() {
        console.log("step3 completed");
      }
      setTimeout(() => {
        step3();
        console.log("All steps finished");
      }, 1000);
    }, 1000);
  }, 1000);
}

step1();

// 2nd way using async and await more cleaner appraoch

// function createDelay(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delay);
//   });
// }

// async function step1() {
//   await createDelay(1000);
//   console.log("step 1 completed");
//   await createDelay(1000);
//   console.log("step 2 completed");
//   await createDelay(1000);
//   console.log("step 3 completed");
//   console.log("All step finished");
// }

// task 3:-
// Create a function tossCoin() that returns a Promise.
// Resolve with "Heads" if a random number is greater than 0.5, otherwise reject with "Tails".
// Consume the promise using .then() and .catch().

function tossCoin() {
  return new Promise((resolve, reject) => {
    const randomNum = Math.random();
    if (randomNum > 0.5) {
      resolve("Heads!! is the result");
    } else {
      reject("Tails!! is the result");
    }
  });
}

tossCoin()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// task 4:-
// Create a Promise that resolves with the number 5.
// Chain .then() to double the number, then another .then() to add 20, and finally log the result.

const promise = new Promise((resolve, _) => {
  resolve(5);
});

promise
  .then((data) => data * 2)
  .then((data) => data + 20)
  .then((data) => console.log(data));

// Note :- We can't use finally here becuase .finally() does NOT receive the resolved value
//         data is always undefined

// promise
//   .then((data) => data * 2)
//   .then((data) => data + 20)
//   .finally((data) => console.log(data)); // undefined

// task 5:-
// Create a function wait(ms) that returns a Promise and resolves after ms milliseconds using setTimeout.
// Use it to log "2 seconds passed" after 2000 ms.

function wait(delay) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(`${delay / 1000} seconds passed`);
    }, delay);
  });
}

wait(2000).then((data) => console.log(data));

// Create a function simulateTask(name, delay) that returns a Promise resolving after delay ms.
// Part A: Run three tasks sequentially using async/await.
// Part B: Run three tasks simultaneously using Promise.all().
// Compare the total time taken for Part A vs Part B.

function simulateTask(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} completed`);
      resolve(name);
    }, delay);
  });
}

async function runSequential() {
  console.time("Sequential Time");

  await simulateTask("Task 1", 1000);
  await simulateTask("Task 2", 2000);
  await simulateTask("Task 3", 3000);

  console.timeEnd("Sequential Time");
}

runSequential(); //  1000 + 2000 + 3000 = 6000 ms


async function runParallel() {
  console.time("Parallel Time");

  await Promise.all([
    simulateTask("Task 1", 1000),
    simulateTask("Task 2", 2000),
    simulateTask("Task 3", 3000),
  ]);

  console.timeEnd("Parallel Time");
}

runParallel(); // max(1000, 2000, 3000) = 3000 ms

