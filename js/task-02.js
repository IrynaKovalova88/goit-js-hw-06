const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemIngredients = document.querySelector('#ingredients');
ingredients.forEach(ingredient => {
  const listIngredients = document.createElement('li');
  listIngredients.classList.add('item');
  listIngredients.textContent = ingredient;
  itemIngredients.appendChild(listIngredients);
})