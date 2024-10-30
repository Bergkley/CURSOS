// 1 - exemplo decorator
function myDecorator() {
  console.log("Iniciando o decorator!")
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("myDecorator(): executado");
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
  };
}


class MyClass {

  @myDecorator()
  testing() {
    console.log("Terminando execução do método")
  }
}

const myObj = new MyClass()

myObj.testing()

// 2 - multiplos decorators
function a() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Executou a")
  };
}

function b() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Executou b")
  };
}

class MultipleClass {

  @a()
  @b()
  testing() {
    console.log("Terminando execução do método")
  }
}

const multiple = new MultipleClass()

multiple.testing()

// 3 - class decorator
function classDec(constructor: Function) {
  console.log(constructor)
  if(constructor.name === "User") {
    console.log("Criando usuário!")
  }
}

@classDec
class User {
  name

  constructor(name: string) {
    this.name = name
  }
}

const matheus = new User("Matheus")

// 4 - method decorator
function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}

class Machine {
  name

  constructor(name: string) {
    this.name = name
  }

  @enumerable(false)
  showName() {
    return `O nome da máquina é: ${this.name}`
  }
}

const trator = new Machine("Trator")

console.log(trator)

// 5 - acessor decorator

class Monster {
  name?
  age?

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  @enumerable(true)
  get showName() {
    return `Nome do monstro: ${this.name}`
  }

  @enumerable(false)
  get showAge() {
    return `Idade do monstro: ${this.age}`
  }
}

const charmander = new Monster("Charmander", 10)

console.log(charmander)

// 6 - property decorator
function formatNumber() {
  return function(target: Object, propertyKey: string) { 
    let value : string;

    const getter = function() {
      return value;
    };
    const setter = function(newVal: string) {
      value = newVal.padStart(5, "0")
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter
    }); 
  }
}

class ID {
  @formatNumber()
  id

  constructor(id: string) {
    this.id = id
  }
}

const newItem = new ID("1")

console.log(newItem.id)

