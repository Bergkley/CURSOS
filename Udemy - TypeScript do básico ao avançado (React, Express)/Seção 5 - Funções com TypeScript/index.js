"use strict";
//  1 - void
function withoutReturn() {
    console.log('Função sem retorno');
}
withoutReturn();
// 2 - Callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log('Preparando a saudação');
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, 'Bergkley');
// 3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));
function mergeObjects(objA, objB) {
    return {
        ...objA,
        ...objB
    };
}
const newPerson = mergeObjects({ name: 'Bergkley' }, { age: 19, job: 'Programador' });
// 4 - constraints nas Generic 
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(3, 6));
console.log(biggestNumber('3', '6'));
// 5 - type parameters
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([1, 2, 3], ['a', 'b', 'c']));
// 6 - Parâmetro opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `${greet} ${name}`;
    }
    return `Olá ${name}`;
}
console.log(modernGreeting('Bergkley'));
// 7 - Parâmetro default
function somaDefault(a, b, c = 10) {
    return a + b + c;
}
console.log(somaDefault(5, 2));
// 8 - unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log('x é um number');
    }
}
console.log(doSomething([1, 2, 3]));
// 9 - never
function showErrorMessage(msg) {
    throw new Error(msg);
}
console.log(showErrorMessage('Alguma coisa deu errado'));
// 10 - Rest parameters
function sumAll(...n) {
    return n.reduce((t, a) => t + a);
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// 11 - Destructuring como parâmetro
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e o preço é ${price}`;
}
const shirt = { name: 'Camisa', price: 49.9 };
console.log(showProductDetails(shirt));
