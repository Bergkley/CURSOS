// 1 - arrays

let numbers: number[] = [1, 2, 3, 4, 5];

numbers.push(6);

// numbers = "teste"

const nomes: string[] = ["Berg","John"]

// outra sintaxe do array
const nums: Array<number> = [1, 2, 3, 4, 5];

nums.push(6)

// 3 - any

const arr1: any = [1, 2, "teste",true,[],{nome:"Berg"}];

// 4 - Parâmetro tipados

function soma(a: number, b: number) {
    console.log(a + b);
}

soma(4,5)

// 5 - retorno de função
function greeting(name: string): string {
    return `Ola ${name}`
}

greeting("Berg")