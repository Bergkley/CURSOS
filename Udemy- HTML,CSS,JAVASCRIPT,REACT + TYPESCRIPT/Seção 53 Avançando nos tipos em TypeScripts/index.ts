// 1 - arrays

let numbers: number[] = [1, 2, 3, 4, 5];

numbers.push(6);

// numbers = "teste"

const nomes: string[] = ["Berg", "John"];

// outra sintaxe do array
const nums: Array<number> = [1, 2, 3, 4, 5];

nums.push(6);

// 3 - any

const arr1: any = [1, 2, "teste", true, [], { nome: "Berg" }];

// 4 - Parâmetro tipados

function soma(a: number, b: number) {
  console.log(a + b);
}

soma(4, 5);

// 5 - retorno de função
function greeting(name: string): string {
  return `Ola ${name}`;
}

greeting("Berg");

// 6 - Função anonima

setTimeout(function () {
  const sallary: number = 1000;
  console.log(sallary);
}, 2000);

// 7 - tipos de objeto

function passCoordinates(coord: { x: number; y: number }) {
  console.log("X: " + coord.x);
  console.log("Y: " + coord.y);
}

const objCoord = { x: 10, y: 20 };

passCoordinates(objCoord);

const pessoaObj: { nome: string; surname: string } = {
  nome: "Berg",
  surname: "Brasil",
};

// 8 - propriedade opcional

function showNumbers(a: number, b: number, c?: number) {
  console.log("A: " + a);
  console.log("B: " + b);
  if (c) {
    console.log("C: " + c);
  }
}

showNumbers(1, 2, 3);
showNumbers(4, 5);

// 9 - validando argumentos opcional

function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Ola ${firstName} ${lastName}, tudo bem?`
  }

  return `Ola ${firstName}, tudo bem?`;
}

console.log(advancedGreeting("Berg", "Brasil"));
console.log(advancedGreeting("Berg"))

// 10 - Union Types
function showBalance(balance: string | number) {
  console.log(`O saldo da conta e ${balance}`)
}

showBalance(100);
showBalance("500");
// showBalance(true);

// 11 - avançando em union types
function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado!"
  }

  return `A função do usuário é ${role}`
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));