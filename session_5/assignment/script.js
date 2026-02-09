const mySecretPara = document.getElementById("secret-message");
const mySecretBtn = document.getElementById("secret-btn");

mySecretBtn.addEventListener("click", () => {
  mySecretPara.innerText = "You found the secret message!";
});

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.style.backgroundColor = "lightblue";
});

const myCount = document.getElementById("mycount");
const incCountBtn = document.getElementById("inc-count");

incCountBtn.addEventListener("click", () => {
  let curr = parseInt(myCount.innerText);
  console.log(curr);
  curr++;

  myCount.innerText = curr;
});

const box = document.getElementById("toggleBox");

box.addEventListener("click", () => {
  box.classList.toggle("active");
});


