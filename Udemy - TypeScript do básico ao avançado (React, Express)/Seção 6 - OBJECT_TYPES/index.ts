// 1 - tipo de objeto para funcão interface

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name} e o preço é ${product.price}`
  );
}

const shirt: Product = {
  name: "Camisa",
  price: 29.9,
  isAvailable: true,
};

showProductDetails(shirt);

// 2 - propriedade opcional em interface

interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O email do usuário é ${user.email}`);

  if(user.role) {
    console.log(`A função do usuário é ${user.role}`);
  }
}

const johnDoe: User = {
  email: "3b5wA@example.com",
    role: 'admin',
};
const berg: User = {
  email: "3b5wA@example.com",
};

showUserDetails(johnDoe);
showUserDetails(berg);

// 3 - propriedade readonly em interface

interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "VW",
  wheels: 4,
};

console.log(fusca);

// 4 - index signature

interface Coordinates {
  [index: string]: number;
}

let coordinates: Coordinates = {
  x: 10,  
}

// 5 - Extending Types interfaces

interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpowers: string[];
}

const berg1: Human = {
  name: "Berg",
  age: 30,
};

const goku: SuperHuman = {
  name: "Goku",
  age: 50,
  superpowers: ["Kamehameha", "Genjutsu"],
};


console.log('Berg', berg1);
console.log('Goku', goku);

// 6 - intersection types

interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber:number;
}

type  HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};

console.log('Arnold', arnold);

// 7 - readonly array

let myArray :ReadonlyArray<string> = ["Maçã","Laranja"];

myArray.forEach((item)=>{
  console.log('Fruta:', item);
})

myArray = myArray.map((item) => {
  return `Fruta: ${item}`
})