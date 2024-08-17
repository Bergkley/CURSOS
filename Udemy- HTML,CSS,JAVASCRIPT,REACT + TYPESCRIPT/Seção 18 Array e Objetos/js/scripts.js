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
