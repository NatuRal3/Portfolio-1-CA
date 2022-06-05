const formElement = document.getElementById("formContact");
const formElementButton = document.querySelector("button");
const formValidator = document.querySelector(".formValidator");
const formSubmitElement = formElement.querySelector("button");
const formInputElement = formElement.querySelectorAll("input");

formSubmitElement.addEventListener("click", submit);

function submit(element) {
  let formIsValid = true;

  formInputElement.forEach((item) => {
    if (!item.checkValidity()) {
      formIsValid = false;
      formValidator.innerHTML = `
                            <div class="formValidFalse formValidStyle">
                               Please make sure all the information below is typed in correctly
                            <div>
                                `;
    }
  });

  if (formIsValid) {
    formValidator.innerHTML = `
                            <div class="formValidTrue formValidStyle bold">
                                ✔ Form Submitted Successfully ✔
                            <div>
                                  `;
    formElementButton.innerHTML = `SUBMITTED`;
    element.preventDefault();
  }
}
