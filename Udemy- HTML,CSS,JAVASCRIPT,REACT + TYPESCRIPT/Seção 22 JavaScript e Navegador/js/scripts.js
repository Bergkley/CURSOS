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

// 6 - insertBefore
const p = document.createElement('p');
const header = title.parentElement;
header.insertBefore(p, title);

// 7 - apendChild
const navlinks = document.querySelector("nav ul");
const li = document.createElement("li");
navlinks.appendChild(li);

// 8 - removeChild
const h2 = document.createElement("h2");
h2.textContent = "Novo h2";
header.replaceChild(h2, title);
