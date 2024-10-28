// 1 - type guard
function sum(a: number | string, b: number | string){

   if(typeof a === 'string' && typeof b === 'string') {
    console.log(parseFloat(a) + parseFloat(b))
   }else if(typeof a === 'number' && typeof b === 'number') {
    console.log(a + b)
   }else{
    console.log('Impossível realizar esta operação')
   }
   
} 

sum('10', '20')
sum(12, 13)
sum("20", 21)

// 2 - checando se o valor existe

function operation(arr:number[], operation:string| undefined ){
  if(operation){
    if(operation === 'sum'){
      const sum = arr.reduce((i, total) => total + i)
      console.log(sum)
    }else if(operation === 'multiply'){
      const multiply = arr.reduce((i, total) => total * i)
      console.log(multiply)
    }

  }else {
    console.log('Por favor, defina uma operaçao')
  }
}

operation([1,2,3,4,5], 'sum')


// 3 - instane of

class User {
  name
  constructor(name:string){
    this.name = name
  }
}

class SuperUser extends User {
  constructor(name:string){
    super(name)
  }
}

const user = new User('Bergkley')
const superUser = new SuperUser('berg')

function userGreeting(user: object){
  if(user instanceof SuperUser){
    console.log(`Ola ${superUser.name}... deseja ver os dados do sistema`)

  }else if(user instanceof User){
    console.log(`Ola ${user.name}`)
  }
}

userGreeting(user)
userGreeting(superUser)

// Operador In

class Dog {
  name
  breed
  constructor(name:string, breed?:string){
    this.name = name
    if(breed){
      this.breed = breed
    }
  }
}

const turca = new Dog('Turca')
const bob = new Dog('Bob', 'Pastor Alemao')

function showDogDetails(dog: Dog){
  if('breed' in dog){
    console.log(`O cachorro e um ${dog.breed}`)
  }else{
    console.log('O cachorro e um cachorro SRD')
  }
}

showDogDetails(turca)
showDogDetails(bob)

// 5  - task

function reviewUser (nota: boolean | number){
  if(!nota){
    console.log('Por favor, defina uma nota')
    return
  }else{
    console.log(`Sua nota e ${nota}`)
  }

}