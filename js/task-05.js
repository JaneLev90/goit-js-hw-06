const inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onInputChange);


const outputEl = document.querySelector('span#name-output');

//let outputSpan = `Anonymous`;

function onInputChange (event) {
    //outputEl.textContent = outputSpan;
    outputEl.textContent = event.currentTarget.value;
    console.log (outputEl);
}


