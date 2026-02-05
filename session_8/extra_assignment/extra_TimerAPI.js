// // common mistake :- Don't use setTimeout with while loops

function timer(n){
    let i = 1
    while(i<=n){
        setTimeout(()=>{
            console.log(i)
        },i*1000)
        i++
    }
}

// // output:- 6 6 6 6 6

// // Reason :-
// // let in for creates a new binding per iteration
// // Each timeout gets its own i
// // while loop does not create a new binding per iteration.

function timer(n){
    let i = 1
    while(i<=n){
        let ptr = i  // new binding for each iteration
        setTimeout(()=>{
            console.log(ptr)
        },i*1000)
        i++
    }
}

// // problem 1:- 1 to n (1 after 1 sec 2 after 2 sec 3 after 3 sec and so on)

function timer(n) {
  let delay = 1;
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, delay * 1000);
    delay += i;
  }
}

// // timer(5);

// // problem 2:- n to 1 (n after n sec , n-1 after n-1 sec so on )

function timer(n) {
  let delay = n;
  for (let i = n; i > 0; i--) {
    setTimeout(() => {
      console.log(i);
    }, delay * 1000);
    delay += i - 1;
  }
}

// // problem 3:- Print numbers continuously every second Stop automatically after 10 seconds.

function stopPrintNumAfter(n) {
  let count = 0;
  const id = setInterval(() => {
    count++;
    console.log(count);
  }, 1000);
  setTimeout(() => {
    clearInterval(id);
  }, n * 1000);
}

// stopPrintNumAfter(5);

// // problem 4: setTimeout using setInterval

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

// // mysetTimeout(fn, 1000);

// problem 5: setInterval using setTimeout

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

// // problem 6: Implement poll(fn, interval, timeout)
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

// polling(2000, 1000,10000);


