
// problem 5: implement setInterval using setTimeout

function mysetInterval(fn, delay) {
  const myId = {
    id: null,
  };
  function wrapper() {
    myId.id = setTimeout(() => {
      fn();
      myId.id = wrapper(fn, delay);
    }, delay);
    return myId.id;
  }
  wrapper();
  return myId;
}

function myclearInterval(myId) {
  clearTimeout(myId.id);
}

const id = mysetInterval(() => {
  console.log("hiiii");
}, 100);

setTimeout(() => {
  myclearInterval(id);
}, 1000);