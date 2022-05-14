const refs = {
  form: document.querySelector(".login-form"),

}

function onFormSubmit(event) {
  event.preventDefault();
  const outputObj = {};
  const emailElementValue = event.currentTarget.elements.email.value;
  const passwordElementValue = event.currentTarget.elements.password.value;
  if (!emailElementValue || !passwordElementValue) {
    alert("You have to fill all fields in the form!!!\n😠");
  } else {
    const name = event.currentTarget.elements.email.name;
    const pass = event.currentTarget.elements.password.name;    
    outputObj[name] = emailElementValue;
    outputObj[pass] = passwordElementValue;
    console.log(outputObj);
    event.currentTarget.reset();
  }
}

refs.form.addEventListener("submit", onFormSubmit);