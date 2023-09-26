const userNameInputBox = document.querySelector("[data-username]");
const passwordInputBox = document.querySelector("[data-password]");
const errorElements = document.querySelectorAll(".error");
const loginBtn = document.querySelector("[data-login-button]");
const form = document.querySelector("[data-form]");

const formValidate = () => {
  if (!userNameInputBox.value && !passwordInputBox.value) {
    errorHandle(userNameInputBox, errorElements[1], "username is required");
    errorHandle(passwordInputBox, errorElements[2], "password is required");
    return false;
  } else if (!userNameInputBox.value) {
    errorHandle(userNameInputBox, errorElements[1], "username is required");
    return false;
  } else if (!passwordInputBox.value) {
    errorHandle(passwordInputBox, errorElements[2], "password is required");
    return false;
  }
 
};

form.addEventListener("submit", formValidate);

function errorHandle(inputbox, element, message) {
  addClass(inputbox, "red-border");
  addClass(element, "show");
  element.innerText = message;
}

function addClass(element, classname) {
  element.classList.add(classname);
}
