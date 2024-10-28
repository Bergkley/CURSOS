//  1 - void
function withoutReturn():void{
  console.log('Função sem retorno');
}

withoutReturn();

// 2 - Callback como argumento

function greeting(name: string) {
  return `Olá ${name}`;
}

function preGreeting(f:(name: string) => string, userName: string) {
  console.log('Preparando a saudação');
  const greet = f(userName);
  console.log(greet);

}

preGreeting(greeting, 'Bergkley')

// 3 - generic function

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));

function mergeObjects<U,T>(objA: U, objB: T) {
  return {
    ...objA,
    ...objB
  }
}

const newPerson = mergeObjects({name: 'Bergkley'}, {age: 19, job: 'Programador'});

// 4 - constraints nas Generic 
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;

  if(+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }
  return biggest;
}

console.log(biggestNumber(3, 6));
console.log(biggestNumber('3', '6'));

// 5 - type parameters

function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays<number | string>([1, 2, 3], ['a', 'b', 'c']));

// 6 - Parâmetro opcionais

function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `${greet} ${name}`;
  }
  return `Olá ${name}`
}
console.log(modernGreeting('Bergkley'));

// 7 - Parâmetro default

function somaDefault(a: number, b: number, c: number = 10) {
  return a + b + c;
}

console.log(somaDefault(5, 2));

// 8 - unknown

function doSomething(x: unknown) {
  if(Array.isArray(x)) {
    console.log(x[0]);
  }else if(typeof x === 'number'){
    console.log('x é um number');
  }
}

console.log(doSomething([1, 2, 3]));

// 9 - never

function showErrorMessage(msg: string): never {
  throw new Error(msg);
}

console.log(showErrorMessage('Alguma coisa deu errado'));

// 10 - Rest parameters
function sumAll(...n: number[]) {
  return n.reduce((t, a) => t + a);
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 11 - Destructuring como parâmetro


function showProductDetails({name, price}: {name: string, price: number}):string {
  return `O nome do produto é ${name} e o preço é ${price}`;
}

const shirt = {name: 'Camisa', price: 49.9};

console.log(showProductDetails(shirt));