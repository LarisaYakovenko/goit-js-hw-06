const boxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const controlsEl = document.querySelector('#controls');

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');

    box.style.width = 30 + (i * 10) + 'px';
    box.style.height = 30 + 'px';
    box.style.background = getRandomHexColor();
    boxes.append(box);
  }

}

boxes.style.marginTop = 20 + 'px';

btnCreate.addEventListener('click', onClick);

function onClick() {
  const amount = controlsEl.firstElementChild.value;
  if (amount > 0) {
    createBoxes(amount);
  }

};

btnDestroy.addEventListener('click', offClick);

function offClick() {
  boxes.innerHTML = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
