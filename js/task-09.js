const refs = {
  btnEl: document.querySelector(".change-color"),
  bodyEl: document.querySelector("body"),
  spanEl: document.querySelector(".color")
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnElClick() {
  const colorName = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = colorName;
  refs.spanEl.textContent = colorName;
}

refs.btnEl.addEventListener("click", onBtnElClick);