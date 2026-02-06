// // problem : Implement poll(fn, interval, timeout)
// // Poll an API until:
// // It returns success
// // OR timeout happens
// // handle confilict as well
// // api call must be one after another

async function makeAPI() {
  // simulating api delay using promise with settimeout

  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve("resolved");
    }, 100);
  });
}

function polling(interval, timeout, endPolling) {
  const id = setInterval(async () => {
    try {
      const result = await Promise.race([
        makeAPI(),
        new Promise((_, reject) =>
          setTimeout(() => reject("time expires"), timeout),
        ),
      ]);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }, interval);

  setTimeout(() => {
    clearInterval(id);
  }, endPolling);
}

polling(2000, 1000,10000);