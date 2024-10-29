// 1- Generics
function showData<T>(arg: T): string {
  return `O dado é ${arg}`;
}

console.log(showData(5));

// 2 - constraint em generic

function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto e ${obj.name}`;
}

console.log(showProductName({ name: "Boneco", category: "Brinquedo" }))

// 3 - generic com interface
interface MyObject<T, U> {
  name: string;
  wheels: T;
  engine:U;
}

type Car = MyObject<number, number>;
type Pen = MyObject<boolean, boolean>;

const myCar: Car = { name: "Fusca", wheels: 4, engine: 1.0 };
const myPen: Pen = { name: "Caneta", wheels: true, engine: false }

console.log(myCar, myPen)

//4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `O valor da chave ${key} é ${obj[key]}`
}

const server2 = {
  hd: "2TB",
  ram: "32GB"
}

console.log(getSomeKey(server2, "ram")) 

// 5 - keyof type operator

type Character = {
  name: string;
  age: number;
  hasDriveLicense: boolean;
}

type C = keyof Character;

function showCharName(obj: Character, name: C):string {
  return `${obj[name]}`
}

const myChar: Character = {
  name: "berg",
  age: 19,
  hasDriveLicense: true
}

console.log(showCharName(myChar, "name"))

// 6 - typeof type operator
const userName: string = "Berg"
const userName2: typeof userName = "John"

// 7 - indexed Acess types

type Truck = {
  km: number;
  kg: number;
  description: string;
}

type Km = Truck["km"];

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: "Caminhão"
}

function showkm(km: Km) {
  console.log(km)
}

showkm(newTruck.km)

// 8 - conditional types

interface A {}
interface B extends A {}
type myType = A extends B ? number : string

const someVar: myType = 5