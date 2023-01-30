const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientItems = ingredients.map(item => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredients[0];
  ingredientItem.classList.add('item');

  return ingredientItem;
  })
  console.log(ingredientItems)
const ingredientsList = document.querySelector('#ingredients');
ingredientsList.appendChild(...ingredientItems);