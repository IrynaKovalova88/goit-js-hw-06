const numberCategories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${numberCategories.length}`);

numberCategories.forEach(item => {
  console.log(
    `Category: ${item.firstElementChild.textContent}`
    );
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});
