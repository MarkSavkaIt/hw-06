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

ul.append(
  ...ingredients.map((ingredient) => {
    let li = document.createElement("li");
    li.textContent = ingredient;
    li.className = "item";
    return li;
  })
);
