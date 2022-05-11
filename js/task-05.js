const refs = {
  inputElement: document.querySelector("input#name-input"),
  spanElement: document.querySelector("span#name-output")
};

refs.inputElement.addEventListener("keyup", onInputElementKeyup);

function onInputElementKeyup() {
  const inputValue = refs.inputElement.value;
  inputValue === "" ? refs.spanElement.textContent = "Anonymous" : refs.spanElement.textContent = inputValue;
}
