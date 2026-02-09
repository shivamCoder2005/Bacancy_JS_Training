// // problem: setTimeout using setInterval

function mysetTimeout(fn, delay) {
  const id = setInterval(() => {
    fn();
    clearInterval(id);
  }, delay);
  return id;
}

function myclearTimeout(id) {
  clearInterval(id);
}

const fn = () => {
  console.log("hello");
};

// mysetTimeout(fn, 1000);