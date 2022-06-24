const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  if (input.value.length === +input.dataset.length) {
    input.className = "valid";
  } else input.className = "invalid";
});
