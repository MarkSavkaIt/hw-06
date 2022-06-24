const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById("ingredients");

const arr = [];

ingredients.forEach((ingredient) => {
  let li = document.createElement("li");
  li.textContent = ingredient;
  li.className = "item";
  arr.push(li);
});

ul.append(...arr);
