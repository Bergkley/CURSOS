// 1 - exemplo decorator

function myDecorator(){
  console.log("Iniciando decorator!")

  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log("Executando decorator!")
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
  }
}

class myClass {
  @myDecorator()
  testing(){
    console.log("testing")
  }
}

const myObj = new myClass();
myObj.testing()

// 2 - multiple decorators

function a(){
  console.log("Iniciando decorator a")
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log("executando a ")
  }
}
function b(){
  console.log("Iniciando decorator b")
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log("executando b ")
  }
}

class MultipleDecorators{
  @a()
  @b()
  testing(){
    console.log("testing")
  }
}

const myObj2 = new MultipleDecorators();
myObj2.testing()

// 3 - class decorator

function classDec(constructor: Function){
  console.log(constructor)
  if(constructor.name === "User"){
    console.log("Criando usuário")
  }
}

@classDec
class User {
  name

  constructor(name:string){
    this.name = name
  }
}

const berg = new User("Berg")
console.log(berg)

// 4 - Decorator de método

function enumerable(value: boolean){
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    descriptor.enumerable = value
  }
}
class Machine {
  name

  constructor(name: string) {
    this.name = name
  }


  @enumerable(false)
  showName() {
    console.log(`The name is: ${this.name}`)
  }
}

const trator = new Machine("Trator")
trator.showName()

// 5 - acessor decorator
class Monster {
  name?
  age?

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  @enumerable(true)
  get showName() { return this.name }
  @enumerable(true)
  get showAge() { return this.age }
}

const charmander = new Monster("Charmander", 10)