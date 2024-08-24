const form = document.querySelector("form");
const inputEmail = form.querySelector("#email");
const errorText = form.querySelector("p");

function checkError(event) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (inputEmail.value === "") {
    event.preventDefault();
    errorText.style.display = "block";
    errorText.innerText = "Oops! Please add your email";
  } else if (!inputEmail.value.match(validRegex)) {
    event.preventDefault();
    errorText.style.display = "block";
    errorText.innerText = "Oops! Please check your email";
  } else {
    errorText.style.display = "none";
    errorText.innerText = "";
  }
}

form.addEventListener("submit", checkError);
