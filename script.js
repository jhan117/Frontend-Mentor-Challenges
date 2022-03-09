const form = document.querySelector("form");
const inputEmail = form.querySelector("#email");
const message = form.querySelector("p");

function error(event) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (inputEmail.value === "") {
    event.preventDefault();
    form.classList.add("error");
    message.innerHTML = "Whoops! It looks like you forgot to add your email";
  } else if (!inputEmail.value.match(validRegex)) {
    event.preventDefault();
    form.classList.add("error");
    message.innerHTML = "Please provide a valid email address";
  } else {
    form.classList.remove("error");
    message.innerHTML = "";
  }
}

form.addEventListener("submit", error);
