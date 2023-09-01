const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const titlePotatoesEl = document.createElement('li');
titlePotatoesEl.classList.add('item');
titlePotatoesEl.textContent = 'Potatoes';
// console.log(titlePotatoesEl)

const titleMushroomsEl = document.createElement('li');
titleMushroomsEl.classList.add('item');
titleMushroomsEl.textContent = 'Mushrooms';

const titleGarlicEl = document.createElement('li');
titleGarlicEl.classList.add('item');
titleGarlicEl.textContent = 'Garlic';

const titleTomatosEl = document.createElement('li');
titleTomatosEl.classList.add('item');
titleTomatosEl.textContent = 'Tomatos';

const titleHerbsEl = document.createElement('li');
titleHerbsEl.classList.add('item');
titleHerbsEl.textContent = 'Herbs';

const titleCondimentsEl = document.createElement('li');
titleCondimentsEl.classList.add('item');
titleCondimentsEl.textContent = 'Condiments';

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(titlePotatoesEl, titleMushroomsEl, titleGarlicEl, titleTomatosEl, titleHerbsEl, titleCondimentsEl)