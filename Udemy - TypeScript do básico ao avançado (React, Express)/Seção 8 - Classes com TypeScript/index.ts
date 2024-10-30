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