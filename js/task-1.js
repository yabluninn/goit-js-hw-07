const listItems = document.querySelectorAll(".item");

function countCategories() {
  let count = 0;
  count = listItems.length;
  return count;
}

function showAllCategoryInfo() {
  listItems.forEach((item) => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(
      `Elements: ${item.querySelector("ul").querySelectorAll("li").length}`
    );
  });
}

console.log(`Number of categories: ${countCategories()}`);

showAllCategoryInfo();
