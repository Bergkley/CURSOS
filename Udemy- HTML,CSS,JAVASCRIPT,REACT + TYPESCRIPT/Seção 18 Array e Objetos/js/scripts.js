// 1 - arrays
const lista = [1, 2, 3, 4,5]

// 2- mais sobre arrays
const arr = ["a", "b", "c", "d", "e", "f"];

console.log(arr[0]);

// 3 - propriedades
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.length)

// 4 - métodos
const otherNumbers = [1, 2, 3, 4, 5];
const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);
const text = "algum texto"

console.log(text.toUpperCase())

console.log(text.indexOf('g'))

// 5 - objetos
const person = {
    name: "João",
    age: 31,
    job: "Programador",
}
console.log(person)
console.log(person.name)

// 6 - criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 2000
}

console.log(car)
car.doors = 4;

console.log(car)
delete car.km;
console.log(car)

// 7 - mais sobre objetos
const obj = {
    a:"teste",
    b:"teste2"
}
console.log(obj instanceof Object);

const obj2 ={
    c: []
}
Object.assign(obj2, obj)
// 8 - conhecendo melhor os objetos

console.log(Object.keys(obj2));
console.log(Object.entries(obj2));

// 9 - Mutação
const a = {
    name: "Berrg",
}
const b = a;

// 10 - loop em array
const users = ["João", "Maria", "Pedro"];
for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`);
}

// 11 - push e pop
const array = ["a", "b", "c"];

array.push("d");
console.log(array);
array.pop();
console.log(array)

// 12 - shift e unshift
const array2 = ["a", "b", "c"];
array2.shift();
console.log(array2);
array2.unshift("d");
console.log(array2)

// 13 - indexOf e lastIndexOf
const array3 = ["a", "b", "c", "d", "a"];
console.log(array3.indexOf("a"));
console.log(array3.lastIndexOf("a"));

// 14 - slice

const testesSlice = ["a", "b", "c", "d", "e", "f"];
const subArray = testesSlice.slice(2 ,4)

// 15 -  foreach
const nums = [1, 2, 3, 4, 5];
nums.forEach((numero) => {
    console.log(`o numero é ${numero}`)
})
const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "Js"},
    {title: "Terceiro post", category: "Python"},
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title} da categorias: ${post.category}`)
});
// 16 - includes
const arrayteste11 = ["a", "b", "c", "d", "e", "f"];
console.log(brands.includes("a"));
console.log(brands.includes("g"));

// 17 - reverse (array)
const reverseTeste = [1, 2, 3, 4, 5];
reverseTeste.reverse();
console.log(reverseTeste)

// 18 - trim (string)
const trimTeste = "  teste  ";
console.log(trimTeste.trim())

// 19 - padStart & padEnd (string)
const testePadStart = "1";

const newNumber = testePadStart.padStart(4, '0');

console.log(newNumber)
const testePadEnd = newNumber.padEnd(10, '0');

console.log(testePadEnd)

// 20 - split (string)
const splitTeste = "1,2,3,4,5";
console.log(splitTeste.split(","))

// 21 - join (string)
const itemsParaComprar = ["arroz", "feijão", "carne"];
const fraseDeCompra = `Precisamos comprar: ${itemsParaComprar.join(", ")}`;
console.log(fraseDeCompra)
console.log(joinTeste.join(","))

// 22 - repeat (string)
const repeatTeste = "1,2,3,4,5";
console.log(repeatTeste.repeat(5))

// 23 - rest operator
const somaInfinita = (...args) => {
    let total = 0;
    for(let i=0; i < args.length; i++){
        total += args[i];
    }
    return total;
}
// 24 - for of
const somaInfinita2 = (...args) => {
    let total = 0;
    for(valor of args){
        total += valor;
    }
    return total;
}
// 25 - Destruturando objetos
const user = {
    name: "Bergkley",
    age: 31
}
const {name, age} = user;

// renomear variaveis
const {name: nome, age: idade} = user;

// 26 - Destruturando arrays
const mylist = ["Aviaos", "Carros", "Motos"];

const [VeiculaA, VeiculaB, VeiculaC] = mylist;