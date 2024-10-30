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