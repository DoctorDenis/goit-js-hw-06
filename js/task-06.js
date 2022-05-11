const refs = {
  inputElement: document.querySelector("#validation-input")
};

function onInputElementBlur() {
  const minInputLength = refs.inputElement.dataset.length;
  // console.log(minInputLength);
  if (refs.inputElement.value.length === Number(minInputLength)) {
    refs.inputElement.classList.remove("invalid");
    refs.inputElement.classList.add("valid");
  } else {
    refs.inputElement.classList.remove("valid");
    refs.inputElement.classList.add("invalid");
  }
}

refs.inputElement.addEventListener("blur", onInputElementBlur);
