// Question:- Total execution time of the handlePromise must be around 10 sec
//            but it is around 5sec not 10sec

// Answer:- A Promise starts the moment it is created, not when it is awaited.

// way1 around 5 sec because created at the same time

const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("p1 resolved"), 5000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("p2 resolved"), 5000);
});

async function handlePromise() {
  console.log("promise1 start");
  const p1Data = await p1;
  console.log(p1Data);
  console.log("promise1 end");
  console.log("----------------");
  console.log("promise2 start");
  const p2Data = await p2;
  console.log(p2Data);
  console.log("promise2 end");
}
handlePromise();

// way2 around 10sec because created one after another

// async function handlePromise() {
//   console.log("promise1 start");

//   const p1 = new Promise((resolve) => {
//     setTimeout(() => resolve("p1 resolved"), 5000);
//   });

//   const p1Data = await p1;
//   console.log(p1Data);
//   console.log("promise1 end");

//   console.log("----------------");

//   console.log("promise2 start");

//   const p2 = new Promise((resolve) => {
//     setTimeout(() => resolve("p2 resolved"), 5000);
//   });

//   const p2Data = await p2;
//   console.log(p2Data);
//   console.log("promise2 end");
// }

// handlePromise();
