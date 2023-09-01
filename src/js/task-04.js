const addListenerBtn = document.querySelector("button[data-action='increment']");
const removeListenerBtn = document.querySelector("button[data-action='decrement']");
// const value = document.querySelector('#value');
// const counter = document.querySelector('#counter')

let counterValue = 0;

addListenerBtn.addEventListener('click', onIncreaseClick);
removeListenerBtn.addEventListener('click', onDecreaseClick);

function onDecreaseClick() {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
};

function onIncreaseClick() {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
}



// const wrap = {
//     sub: document.querySelector("[data-action='increment']"),
//     add: document.querySelector("[data-action='decrement']"),
//     span: document.querySelector('#value'),
//     wrapper: document.querySelector('#counter '),
//   };
//   let counterValue = 0;
//   const increment = () => {
//     counterValue += 1;
  
//     document.getElementById('value').textContent = counterValue;
//   };
  
//   const decrement = () => {
//     counterValue -= 1;
  
//     document.getElementById('value').textContent = counterValue;
//   };
//   wrap.sub.addEventListener('click', increment);
//   wrap.add.addEventListener('click', decrement);