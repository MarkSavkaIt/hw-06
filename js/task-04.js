const counter = document.getElementById("counter");
const decrement = counter.children[0];
const value = counter.children[1] || 0;
const increment = counter.children[2];
console.log("counter", decrement, increment, value);

decrement.addEventListener("click", () => {
  value.textContent = Number(value.textContent) - 1;
});

increment.addEventListener("click", () => {
  value.textContent = Number(value.textContent) + 1;
});
