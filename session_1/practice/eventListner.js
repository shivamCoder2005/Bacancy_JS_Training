// to track how many times btn clicked we use closure for data hiding and safety rather than
// creating a global variable

function attachEventListner() {
  let count = 1;
  document.getElementById("mybtn").addEventListener("click", () => {
    console.log("btn clicked!!!!");
    console.log("btn is clicked ", count, " times");
    count++;
  });
}
attachEventListner();


// event listner are very heavy for memory as browser needs to track closure always becuase event listner 
// may call any time 

// too many unnecessary event listner can slow up page

// When to remove listeners

// The element is being destroyed / removed
// (SPA navigation, modal close, component unmount)

// The listener is temporary
// (one-time action, drag operation, onboarding step, etc.)

// You are re-attaching the same listener multiple times
// (inside functions that run again and again)
