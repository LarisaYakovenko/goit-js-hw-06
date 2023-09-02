const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

function createList(arr) {
  const markup = arr.map((arr) =>{
    const liEl = document.createElement('li');
    const itemEl = document.createElement('item');
    const titleEl = document.createElement('p');

    itemEl.classList.add('item');
    titleEl.textContent = (arr);
    
    liEl.append(itemEl, titleEl);
    return liEl;

  })
  ingredientsEl.append(...markup);
}

createList(ingredients);


// const titlePotatoesEl = document.createElement('li');
// titlePotatoesEl.classList.add('item');
// titlePotatoesEl.textContent = 'Potatoes';


// const titleMushroomsEl = document.createElement('li');
// titleMushroomsEl.classList.add('item');
// titleMushroomsEl.textContent = 'Mushrooms';

// const titleGarlicEl = document.createElement('li');
// titleGarlicEl.classList.add('item');
// titleGarlicEl.textContent = 'Garlic';

// const titleTomatosEl = document.createElement('li');
// titleTomatosEl.classList.add('item');
// titleTomatosEl.textContent = 'Tomatos';

// const titleHerbsEl = document.createElement('li');
// titleHerbsEl.classList.add('item');
// titleHerbsEl.textContent = 'Herbs';

// const titleCondimentsEl = document.createElement('li');
// titleCondimentsEl.classList.add('item');
// titleCondimentsEl.textContent = 'Condiments';

// const ingredientsEl = document.querySelector('#ingredients');
// ingredientsEl.append(titlePotatoesEl, titleMushroomsEl, titleGarlicEl, titleTomatosEl, titleHerbsEl, titleCondimentsEl)