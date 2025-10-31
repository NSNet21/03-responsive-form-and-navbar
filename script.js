// close navbar button (x mark)

const closBtn = document.getElementById("xMark");
const rightNavBar = document.getElementById("rightNavbar");

closBtn.addEventListener("click", () => {
  rightNavBar.classList.remove("show-state");
});

// hamburger icon for activate the navbar

const hamIcon = document.getElementById("hamMenu");

hamIcon.addEventListener("click", () => {
  rightNavBar.classList.toggle("show-state");
});

/*  when click somewhere else outside the navbar on media quarry
then close it */

document.addEventListener("click", (e) => {
  const isClickInNabar = rightNavBar.contains(e.target);
  const isClickInHamIcon = hamIcon.contains(e.target);
  if (!isClickInNabar && !isClickInHamIcon) {
    rightNavBar.classList.remove("show-state");
  }
});

// form manipulation

const formContainer = document.getElementById("formContainer");
const loginLink = document.getElementById("loginLink");
const registerLink = document.getElementById("registerLink");

// Add event listener to the link
registerLink.addEventListener("click", () => {
  formContainer.classList.add("active");
});

loginLink.addEventListener("click", () => {
  formContainer.classList.remove("active");
});

// show and hiding form logic

const showForm = document.getElementById("showForm");
showForm.addEventListener("click", () => {
  formContainer.classList.toggle("form-show");
});

const iconClose = document.getElementsByClassName("icon-close")[0];
iconClose.addEventListener("click", () => {
  formContainer.classList.remove("form-show");
});

// border change color effect
iconClose.addEventListener("mouseenter", () => {
  formContainer.style.borderColor = "var(--accent)";
  formContainer.style.boxShadow = "0 0 50px var(--accent)";
});

iconClose.addEventListener("mouseleave", () => {
  formContainer.style.borderColor = "";
  formContainer.style.boxShadow = "";
});
