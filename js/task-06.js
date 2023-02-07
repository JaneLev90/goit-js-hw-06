const inputText = document.querySelector('#validation-input');
inputText.addEventListener('blur', onInputTextSymbols);

const inputBorderValid = document.querySelector('style');
const inputBorderInvalid = document.querySelector('style');

function onInputTextSymbols (event) {

    inputText.textContent = event.currentTarget.value;

console.log(inputText)
}