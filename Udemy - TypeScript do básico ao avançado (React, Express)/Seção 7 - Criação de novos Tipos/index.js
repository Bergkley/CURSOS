"use strict";
// 1- Generics
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData(5));
// 2 - constraint em generic
function showProductName(obj) {
    return `O nome do produto e ${obj.name}`;
}
console.log(showProductName({ name: "Boneco", category: "Brinquedo" }));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0 };
const myPen = { name: "Caneta", wheels: true, engine: false };
console.log(myCar, myPen);
//4 - type parameters
function getSomeKey(obj, key) {
    return `O valor da chave ${String(key)} é ${obj[key]}`;
}
const server2 = {
    hd: "2TB",
    ram: "32GB"
};
console.log(getSomeKey(server2, "ram"));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "berg",
    age: 19,
    hasDriveLicense: true
};
console.log(showCharName(myChar, "name"));
// 6 - typeof type operator
const userName = "Berg";
const userName2 = "John";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão"
};
function showkm(km) {
    console.log(km);
}
showkm(newTruck.km);
const someVar = 5;
const testing = "some text";
