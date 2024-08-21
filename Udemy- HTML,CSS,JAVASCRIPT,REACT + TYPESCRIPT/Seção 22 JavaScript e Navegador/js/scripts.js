// 1 - movendo-se pelo dom
console.log(document.body)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].textContent)

// 2 - Selecionar elementos (tag)

const listItens = document.getElementsByTagName('li');
console.log("tag",listItens);

// 3 - Selecionar elementos (id)
const title = document.getElementById('title');
console.log("id",title);

// 4 - Selecionar elementos (class)
const products = document.getElementsByClassName('product');
console.log("class",products);

// 5 - Selecionar elementos (css)
const productQuery = document.querySelectorAll(".product");
console.log("css",productQuery);

const mainContainer = document.querySelector("#main-container");
console.log("css",mainContainer);