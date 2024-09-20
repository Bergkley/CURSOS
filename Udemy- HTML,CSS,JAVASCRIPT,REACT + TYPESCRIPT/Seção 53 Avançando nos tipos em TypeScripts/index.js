"use strict";
// 1 - arrays
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
// numbers = "teste"
const nomes = ["Berg", "John"];
// outra sintaxe do array
const nums = [1, 2, 3, 4, 5];
nums.push(6);
// 3 - any
const arr1 = [1, 2, "teste", true, [], { nome: "Berg" }];
// 4 - Parâmetro tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// 5 - retorno de função
function greeting(name) {
    return `Ola ${name}`;
}
greeting("Berg");
// 6 - Função anonima
setTimeout(function () {
    const sallary = 1000;
    console.log(sallary);
}, 2000);
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log("X: " + coord.x);
    console.log("Y: " + coord.y);
}
const objCoord = { x: 10, y: 20 };
passCoordinates(objCoord);
const pessoaObj = {
    nome: "Berg",
    surname: "Brasil",
};
// 8 - propriedade opcional
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// 9 - validando argumentos opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Ola ${firstName} ${lastName}, tudo bem?`;
    }
    return `Ola ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Berg", "Brasil"));
console.log(advancedGreeting("Berg"));
// 10 - Union Types
function showBalance(balance) {
    console.log(`O saldo da conta e ${balance}`);
}
showBalance(100);
showBalance("500");
// showBalance(true);
// 11 - avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID do usuário e ${id}`);
}
showId(1);
showId("200");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 20,
    z: 30
};
showCoords(coordObj);
const SomePerson = {
    name: "Berg",
    age: 30
};
// type personType = {
//   age: number;
// }
// 15 - literal types
let teste;
teste = "testando";
function showDirection(direction) {
    console.log(`A direção e ${direction}`);
}
showDirection("left");
// showDirection("top");
// 16 - non null assertion operator
const p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - bigint
let n;
n = 1000n;
console.log(n);
// 18 - Symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA === symbolB);
