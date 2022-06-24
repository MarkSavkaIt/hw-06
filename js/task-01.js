let count = document.getElementById("categories");
console.log("Number of categories: ", count.children.length);

let allLi = document.getElementsByTagName("li");

for (let i = 0; i < allLi.length; i++) {
  if (allLi[i].className === "item") {
    console.log("Category : ", allLi[i].children[0].childNodes[0]);
  }
}
