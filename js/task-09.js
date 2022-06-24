function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const color = document.getElementsByClassName("color")[0];
const changeColor = document.getElementsByClassName("change-color")[0];

console.log(body, color, changeColor);

changeColor.addEventListener("click", (e) => {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});
