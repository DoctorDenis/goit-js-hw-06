function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let size = 30;
const refs = {
  createButton: document.querySelector("[data-create]"),
  destroyButton: document.querySelector("[data-destroy]"),
  divBoxesEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("input[type='number']")
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newDivEl = document.createElement("div");
    newDivEl.style.width = `${size}px`;
    newDivEl.style.height = `${size}px`;
    newDivEl.style.backgroundColor = getRandomHexColor();
    size += 10;
    refs.divBoxesEl.append(newDivEl);
  }
}

refs.createButton.addEventListener("click", () => {
  createBoxes(refs.inputEl.value);
})

refs.destroyButton.addEventListener("click", () => {
  refs.divBoxesEl.innerHTML = "";
})
