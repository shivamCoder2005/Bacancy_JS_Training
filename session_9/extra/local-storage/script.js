// local storage for storing theme or user preferneces

// example for local storage :- stroing user theme dark or white

const togglebtn = document.querySelector("#toggleTheme");

if (!localStorage.getItem("theme")) {
  document.body.classList.add("body-white");
  localStorage.setItem("theme", "body-white");
}

const theme = localStorage.getItem("theme");
document.body.classList.add(theme);

function setTheme(newTheme, oldTheme) {
  document.body.classList.remove(oldTheme);
  document.body.classList.add(newTheme);
  localStorage.setItem("theme", newTheme);
}

togglebtn.addEventListener("click", () => {
  const oldTheme = localStorage.getItem("theme");
  const newTheme = oldTheme == "body-white" ? "body-dark" : "body-white";
  setTheme(newTheme, oldTheme);
});