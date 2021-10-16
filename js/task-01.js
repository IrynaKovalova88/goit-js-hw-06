const numberCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${numberCategories.length}`);

numberCategories.forEach(el => {
  console.log(
    `Category: ${el.querySelector('h2').textContent}`
    );
    console.log(`Elements: ${el.querySelectorAll('li').length}`);
});