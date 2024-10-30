// 1 - campos de Classes

class User {
  name!: string;
  age!: number;
}

const berg = new User();
berg.name = "Berg";

// 2 - constructor
class NewUser {
  name
  age
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const joao = new NewUser("Joao", 22);
console.log(joao);

// 3 - Campos de readonly

class Car {
  name
  readonly wheels: number = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const fusca = new Car("Fusca");
console.log(fusca);

// 4 - Herança e super
class Machine {
  name
  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine("Trator");

class KillerMachine extends Machine {
  guns

  constructor(name: string, guns: number) {
    super(name);
    this.guns = guns;
  }
}

const destroyer = new KillerMachine("Destroyer", 2);
console.log(destroyer)

// 5 - Métodos
class Dwarf {
  name

  constructor(name: string) {
    this.name = name
  }

  greeting(){
    console.log(`Hey Stranger`)
  }
}

const cerberus = new Dwarf("Cerberus");
cerberus.greeting()

// 6 - This
class Truck {
  model
  hp

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails(){
    console.log(`Model: ${this.model}, HP: ${this.hp}`)
  }
}

const f150 = new Truck("F150", 400);
f150.showDetails()

// 7 - Getters 

class Person {
  name
  surname

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
}

const bergs = new Person("Berg", "Brasil");
console.log(bergs.fullName)

// 8 - Setters

class Coords {
  x!: number
  y!: number

  set fillX(x: number) {
    if(x === 0) {
      return
    }
    this.x = x

    console.log("X inserido com sucesso")
  }
  set fillY(y: number) {
    if(y === 0) {
      return
    }
    this.y = y

    console.log("Y inserido com sucesso")
  }

  get getCoords() {
    return `X: ${this.x} Y: ${this.y}`
  }
}

const mtCoords = new Coords();
mtCoords.fillX = 10;
mtCoords.fillY = 15;

console.log(mtCoords.getCoords)

// 9 - Herança de interfaces
interface showTitle {
  itemTitle(): string
}

class blogProst implements showTitle {
  title

  constructor(title: string) {
    this.title = title
  }

  itemTitle() {
    return `Blog: ${this.title}`
  }
}

const myBlog = new blogProst("My Blog");
console.log(myBlog.itemTitle())

// 10 - overriede de métodos

class Base {
  someMethod(){
    console.log("Algo")
  }
}

class Nova extends Base {
  someMethod(){
    console.log("Novo Algo")
  }
}

const nova = new Nova();
nova.someMethod()

// 11 - Public

class C {
  public x = 10
}

class D extends C {
}

const cInstance = new C();
console.log(cInstance.x)

const dInstance = new D();
console.log(dInstance.x)

// 12 - protected
class E {
  protected x = 10
}

class F extends E {
  showX(){
    console.log(this.x)
  }
}

const fInstance = new F();

fInstance.showX()

// 13 - Private

class PrivateClass {
  private name = "Berg"

  showName(){
    console.log(this.name)
  }
}

const pObj = new PrivateClass();
pObj.showName()

// 14 - static
class StaticMembers {
  static prop = "Teste static"

  static statticMethod () {
    console.log("Teste static method")
  }
}

console.log(StaticMembers.prop);

StaticMembers.statticMethod();

// 15 - generic class

class Item<T,U> {
  first
  second

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  get showFirst() {
    return `O primeiro item é: ${this.first}`
  }
}

const newItem = new Item(1, "teste");

console.log(newItem)

console.log(newItem.showFirst)

// 16 - parameter properties
class ParameterProperties {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name
    this.qty = qty
    this.price = price
  }
  get showQty() {
    return `The quantity is: ${this.qty}`
  }
  get showPrice() {
    return `The quantity is: ${this.price}`
  }
}

const newShirt = new ParameterProperties("Shirt", 10, 100.00);

console.log(newShirt.showQty)
console.log(newShirt.showPrice)


// 17 - Class Expressions

const myClass = class<T> {
  name

  constructor(name: T) {
    this.name = name
  }

}

const pessoa = new myClass("Berg")
console.log(pessoa.name)

// 18 - Abstract class

abstract class AbstractClass {
  abstract showName(): void;

}

class AbstractExample extends AbstractClass {
  name:string

  constructor(name: string) {
    super();
    this.name = name
  }

  showName() {
      console.log(`The name is: ${this.name}`)
  }
}

const newAbstract = new AbstractExample("Berg")
newAbstract.showName()

// 19 - Relações entre classes

class Dog {
  name!: string
  
}
class Cat {
  name!: string
  
}

const doguinho: Dog = new Cat();
console.log(doguinho)