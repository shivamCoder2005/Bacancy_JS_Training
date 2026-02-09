// Promise Timeout Wrapper

// withTimeout(promise, timeout)

// Behavior:
// Resolves if the given promise resolves within timeout ms
// Rejects with "Operation timed out" otherwise

function withTimeout(promise, timeout) {
  return new Promise((resolve, _) => {
    const result = Promise.race([
      promise,
      new Promise((_, reject) => {
        setTimeout(() => reject("Operation timed out"), timeout);
      }),
    ]);
    resolve(result);
  });
}

withTimeout(
  new Promise((resolve, _) => {
    setTimeout(() => {
      resolve("hello");
    }, 5000);
  }),
  1000,
)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
