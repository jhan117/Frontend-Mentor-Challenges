const headerAll = document.querySelectorAll("button");

for (let i = 0; i < headerAll.length; i++) {
  headerAll[i].addEventListener("click", function () {
    this.classList.toggle("collapsed");

    let body = this.nextElementSibling;
    if (body.style.maxHeight) {
      body.style.maxHeight = null;
    } else {
      body.style.maxHeight = body.scrollHeight / 16 + "rem";
    }
  });
}
