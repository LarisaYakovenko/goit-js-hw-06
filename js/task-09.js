const span = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', onClick);


function onClick() {
  document.body.style.backgroundColor = span.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
 
}
