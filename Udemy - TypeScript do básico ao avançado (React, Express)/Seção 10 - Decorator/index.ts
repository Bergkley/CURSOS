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
  console.log('construtor',constructor)
  console.log('construtor',constructor.name)
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

const Berg = new User("Berg")

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

//  7 - exemplo real com class decorator
function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}


@createdDate
class Book {
  id
  createdAt?: Date

  constructor(id: number) {
    this.id = id
  }
}

@createdDate
class Pen {
  id
  createdAt?: Date

  constructor(id: number) {
    this.id = id
  }
}

const newBook = new Book(12)

console.log(newBook)

// 8 - exemplo real com method decorator

function checkIfUserPosted(
  target:Object,
  key:string | Symbol,
  descriptor:PropertyDescriptor
){
  const childFunctions = descriptor.value
  descriptor.value = function (...args: any[]) {

    if(args[1]===true){
      console.log("Usuaário postou!")
      return null
    }else{
      return childFunctions.apply(this, args)
    }
  }
  return descriptor;
}

class Post {
  alreadyPosted = false

  @checkIfUserPosted
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post do usuário: ${content}`);
  }

}


const newPost = new Post()
newPost.post("Meu primeiro post!", newPost.alreadyPosted)


// 9 - exemplo real com property decorator

function Max(limit:number){
  return function (target: Object, propertyKey: string) {
    let value: string;
    
    const getter = function() {
      return value;
    }

    const setter = function(newVal: string) {
      if(newVal.length > limit){
        console.log(`O valor deve ter no maximo ${limit} digitos.`)
        return
      }else {
        value = newVal
      }
      Object.defineProperty(target, propertyKey, {
        set: setter,
        get: getter
      })
    }
  }
}

class Admin {
  @Max(10)
  username

  constructor(username: string) {
    this.username = username
  }
}

