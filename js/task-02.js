const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemIngredients = document.querySelector('#ingredients');
const markup = (item) => {
  const listIngredients = document.createElement('li');
  listIngredients.textContent = item;
  return listIngredients;
};
const createMarkup = ingredients.map(markup);
itemIngredients.append(...createMarkup);