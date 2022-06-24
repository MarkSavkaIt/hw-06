const [email, password, button] =
  document.getElementsByClassName("login-form")[0];

// console.log(email, password, button);

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.value.length === 0) {
    alert("Email empty!!!");
  } else if (password.value.length === 0) {
    alert("Password empty!!!");
  } else {
    console.log({ email: email.value, password: password.value });
    button.parentNode.reset();
  }
});
