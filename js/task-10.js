function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let arr = [];
  for (let i = 0; i < amount; i++) {
    let div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = size * 10 + 30 + "px";
    div.style.height = size * 10 + 30 + "px";
    size++;
    arr.push(div);
  }
  return arr;
}
let size = 1;

const [input, create, destroy] = document.getElementById("controls").children;
console.log(input, create, destroy);

const boxes = document.getElementById("boxes");

create.addEventListener("click", (e) => {
  // console.log(createBoxes(input.value));
  if (input.value) {
    boxes.append(...createBoxes(input.value));
  }
});

destroy.addEventListener("click", (e) => {
  boxes.innerHTML = "";
  size = 1;
});
