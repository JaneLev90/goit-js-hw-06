const categoriesList = document.querySelectorAll(".item");
console.log (`Number of categories: ${categoriesList.length}`);



categoriesList.forEach(element =>{
    const nameEl = categoriesList.firstElementChild.textContent;
const lengthEl = categoriesList.lastElementChild.children.length;
    console.log (`Category: ${nameEl}`);
    console.log (`Elements: ${lengthEl}`);
})









