const refs = {
  inputElement: document.querySelector("#validation-input")
};

function onInputElementBlur() {
  const minInputLength = refs.inputElement.dataset.length;
  // console.log(minInputLength);
  if (refs.inputElement.value.length < minInputLength) {
    refs.inputElement.classList.remove("valid")
    refs.inputElement.classList.add("invalid");
  } else {
    refs.inputElement.classList.remove("invalid")
    refs.inputElement.classList.add("valid");
  }
}

refs.inputElement.addEventListener("blur", onInputElementBlur);
