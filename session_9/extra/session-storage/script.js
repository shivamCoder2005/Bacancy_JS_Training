const nextbtn = document.querySelector("#next");
const myinputs = document.querySelectorAll("input");

myinputs.forEach((myinp) => {
  myinp.value = sessionStorage.getItem(myinp.name) || "";
});
nextbtn.addEventListener("click", (e) => {
  myinputs.forEach((myinp) => {
    sessionStorage.setItem(myinp.name, myinp.value);
  });
});