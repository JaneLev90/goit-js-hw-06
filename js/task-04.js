
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = document.querySelector('#value');


incrementBtn.addEventListener('click', makePlus);
decrementBtn.addEventListener('click', makeMinus);

// counterValue.textContent = 5;
// console.log (counterValue);

function makePlus() {
   console.log('+')
   
};
function makeMinus() {
    console.log('-')
   // console.log (counterValue =- 1);
};