const inputEl = document.querySelector('span#name-output');
inputEl.addEventListener('keypress', onInputKeypress);


const outputEl = document.querySelector('span#name-output');

//let outputSpan = `Anonymous`;

function onInputKeypress (event) {
    //outputEl.textContent = outputSpan;
    outputEl.textContent = event.currentTarget.value;
    console.log (outputEl)
}


