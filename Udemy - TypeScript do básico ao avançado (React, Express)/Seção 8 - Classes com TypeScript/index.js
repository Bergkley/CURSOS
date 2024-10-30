"use strict";
// 1 - campos de Classes
class User {
    name;
    age;
}
const berg = new User();
berg.name = "Berg";
// 2 - constructor
class NewUser {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("Joao", 22);
console.log(joao);
// 3 - Campos de readonly
class Car {
    name;
    wheels = 4;
    constructor(name) {
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
// 4 - Herança e super
class Machine {
    name;
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    guns;
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 2);
console.log(destroyer);
// 5 - Métodos
class Dwarf {
    name;
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log(`Hey Stranger`);
    }
}
const cerberus = new Dwarf("Cerberus");
cerberus.greeting();
// 6 - This
class Truck {
    model;
    hp;
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Model: ${this.model}, HP: ${this.hp}`);
    }
}
const f150 = new Truck("F150", 400);
f150.showDetails();
// 7 - Getters 
class Person {
    name;
    surname;
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const bergs = new Person("Berg", "Brasil");
console.log(bergs.fullName);
// 8 - Setters
class Coords {
    x;
    y;
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `X: ${this.x} Y: ${this.y}`;
    }
}
const mtCoords = new Coords();
mtCoords.fillX = 10;
mtCoords.fillY = 15;
console.log(mtCoords.getCoords);
class blogProst {
    title;
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `Blog: ${this.title}`;
    }
}
const myBlog = new blogProst("My Blog");
console.log(myBlog.itemTitle());
// 10 - overriede de métodos
class Base {
    someMethod() {
        console.log("Algo");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Novo Algo");
    }
}
const nova = new Nova();
nova.someMethod();
// 11 - Public
class C {
    x = 10;
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
// 12 - protected
class E {
    x = 10;
}
class F extends E {
    showX() {
        console.log(this.x);
    }
}
const fInstance = new F();
fInstance.showX();
// 13 - Private
class PrivateClass {
    name = "Berg";
    showName() {
        console.log(this.name);
    }
}
const pObj = new PrivateClass();
pObj.showName();
// 14 - static
class StaticMembers {
    static prop = "Teste static";
    static statticMethod() {
        console.log("Teste static method");
    }
}
console.log(StaticMembers.prop);
StaticMembers.statticMethod();
// 15 - generic class
class Item {
    first;
    second;
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O primeiro item é: ${this.first}`;
    }
}
const newItem = new Item(1, "teste");
console.log(newItem);
console.log(newItem.showFirst);
// 16 - parameter properties
class ParameterProperties {
    name;
    qty;
    price;
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `The quantity is: ${this.qty}`;
    }
    get showPrice() {
        return `The quantity is: ${this.price}`;
    }
}
const newShirt = new ParameterProperties("Shirt", 10, 100.00);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
// 17 - Class Expressions
const myClass = class {
    name;
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Berg");
console.log(pessoa.name);
// 18 - Abstract class
class AbstractClass {
}
class AbstractExample extends AbstractClass {
    name;
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`The name is: ${this.name}`);
    }
}
const newAbstract = new AbstractExample("Berg");
newAbstract.showName();
// 19 - Relações entre classes
class Dog {
    name;
}
class Cat {
    name;
}
const doguinho = new Cat();
console.log(doguinho);
