const form = document.getElementById("email-form");
const inputEmail = document.getElementById("email");
const clickedSubmit = document.getElementById("submit");

function ValidateEmail() {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (inputEmail.value.match(validRegex)) {
    form.classList.remove("error-state");
  } else {
    form.classList.add("error-state");
  }
}

clickedSubmit.addEventListener("click", ValidateEmail);
