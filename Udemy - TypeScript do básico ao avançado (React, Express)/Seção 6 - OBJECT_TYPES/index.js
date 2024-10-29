"use strict";
// 1 - tipo de objeto para funcão interface
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e o preço é ${product.price}`);
}
const shirt = {
    name: "Camisa",
    price: 29.9,
    isAvailable: true,
};
showProductDetails(shirt);
function showUserDetails(user) {
    console.log(`O email do usuário é ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é ${user.role}`);
    }
}
const johnDoe = {
    email: "3b5wA@example.com",
    role: 'admin',
};
const berg = {
    email: "3b5wA@example.com",
};
showUserDetails(johnDoe);
showUserDetails(berg);
const fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
let coordinates = {
    x: 10,
};
const berg1 = {
    name: "Berg",
    age: 30,
};
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genjutsu"],
};
console.log('Berg', berg1);
console.log('Goku', goku);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
console.log('Arnold', arnold);
// 7 - readonly array
let myArray = ["Maçã", "Laranja"];
myArray.forEach((item) => {
    console.log('Fruta:', item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
const myNumber = [1, 2, 3, 4, 5];
// 9 - tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
