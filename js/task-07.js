const refs = {
  inputElement: document.querySelector("#font-size-control"),
  spanElement: document.querySelector("#text")
}

refs.spanElement.style.fontSize = `${refs.inputElement.value}px`;

function onInputElementInput() {
  refs.spanElement.style.fontSize = `${refs.inputElement.value}px`;
}

refs.inputElement.addEventListener("input", onInputElementInput);