const decrementBtn = document.querySelector('.decrement');
const incrementBtn = document.querySelector('.increment');
const counter = document.querySelector('#value');


incrementBtn.addEventListener('click', makePlus);
decrementBtn.addEventListener('click', makeMinus);

let counterValue = counter.textContent;
console.log (counterValue);

function makePlus() {
    console.log (counterValue.textContent += 1);
};
function makeMinus() {
    console.log('-')
   // console.log (counterValue =- 1);
};