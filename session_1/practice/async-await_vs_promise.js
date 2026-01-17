const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 5000);
});

// code after promise don't wait for promise to be resolved
function handlePromiseClassic() {
  console.log("inside handlePromise classic");
  myPromise.then((data) => console.log(data));
  console.log("after promise resolved classic appraoch");
}

// code after await is waiting to execute unitll promise resolved
async function handlePromiseAsyncAwait() {
  console.log("inside handlePromise async await");
  const data = await myPromise;
  console.log(data);
  console.log("after promise resolved async await");
}

handlePromiseClassic();
handlePromiseAsyncAwait();
