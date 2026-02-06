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







