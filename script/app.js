let body = document.body;
let theme = document.querySelector(".theme");
const Button = document.querySelectorAll(".follow-button");

toggleTheme = () => {
  if (body.className === "light-theme") {
    body.className = "dark-theme";
    theme.innerText = "light";
  } else {
    body.className = "light-theme";
    theme.innerText = "Dark";
  }
};
theme.addEventListener("click", toggleTheme);

followUnFollow = (Button) => {
  Button.classList.toggle("followed");
  if (Button.innerText == "Follow") {
    Button.innerText = "UnFollow";
  } else {
    Button.innerText = "Follow";
  }
};
Button.forEach((btn) => {
  btn.addEventListener("click", (e) => followUnFollow(e.target));
});
