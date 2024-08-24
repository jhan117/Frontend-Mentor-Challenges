const form = document.querySelector("form");
const divAll = document.querySelectorAll(".form");
const inputAll = document.querySelectorAll(".form input");
const messageAll = document.querySelectorAll(".form p");

function checkError(event) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  for (let i = 0; i < 4; i++) {
    let input = inputAll[i];
    let div = divAll[i];
    let message = messageAll[i];

    if (input.value === "") {
      event.preventDefault();
      div.classList.add("error");
      message.innerHTML = `${input.placeholder} cannot be empty`; // error message
    } else if (i === 2 && !input.value.match(validRegex)) {
      event.preventDefault();
      div.classList.add("error");
      message.innerHTML = "Looks like this is not an email"; // error message
    } else {
      div.classList.remove("error");
      message.innerHTML = ""; // remove error message
    }
  }
}

form.addEventListener("submit", checkError);
