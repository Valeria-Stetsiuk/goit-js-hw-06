const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listIngredients = ingredients =>
  document.querySelector('#ingredients').append(
    ...ingredients.map(ingredient => {
      const ingredientItem = document.createElement('li');
      ingredientItem.textContent = ingredient;
      return ingredientItem;
    })
  );
listIngredients(ingredients);
