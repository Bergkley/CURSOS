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

