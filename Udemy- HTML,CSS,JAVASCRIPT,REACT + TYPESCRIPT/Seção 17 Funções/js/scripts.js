// 1- Criando uma função
function minhaFunção() {
    console.log('Ola, mundo!')
}
minhaFunção();
const minhaFunçãoEmVariavel = function (){
    console.log('Ola, mundo!')
}
minhaFunçãoEmVariavel();

function funcaoComParametro(txt){
    console.log(txt)
}

funcaoComParametro('Ola, mundo 3!')
// 2- Função com retorno
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma (n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, b);

// 3- Escopo da função
let y = 10;

function testandoEscopo() {
    let y = 20;
    console.log('dentro',y);
}
testandoEscopo();

console.log('fora',y);
testandoEscopo();
// 4- escopo aninhado
let m = 10;

function escopoAninhado() {
    let m = 20;
    if(true){
        let m = 30;
        console.log(m);
    }
    console.log(m);
}
console.log(m)
escopoAninhado()

// 5- arrow function
const funcaoArrow = () => {
    console.log('Arrow Function');
}
funcaoArrow();

// 6- Arrow function mais sobre
const raizQuadrada = (x) => {
    return x * x;
}
console.log(raizQuadrada(4))

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(12))

// 7 - parametro opcional
const multiplication = function(m,n){
    if(n === undefined){
        return m * 2;
    } else {
        return m * n
    }
}

console.log(multiplication(5))
console.log(multiplication(2,4))

// 8- parametro default
const customGreeting = function(name, greet = "Olá"){
    return `${greet} ${name}`
}

console.log(customGreeting('João'))
console.log(customGreeting('João', 'Bom dia'))

// 9- Closure
function someFunction () {
    let txt = "Alguma coia";
    function display() {
        console.log(txt)
    }
    display();
}
someFunction();

// 10- Mais sobre Closure
const multiplicationClosure = (n) => {
    return (m) => {
        return n * m
    }
}

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);

console.log(c1)
console.log(c2)

console.log(c1(5));
console.log(c2(10));

// 11- Recursão
const untilTen= (n, m) => {
    if(n < 10) {
        console.log("A função  parou de executar!");
    } else{
        const x = n - m;
        console.log(x);
        untilTen(x, m);
    }
}

function factorial(x){
    if(x === 0){
        return 1
    } else {
        return x * factorial(x - 1)
    }
}
const num = 6;
const result = factorial(num);
console.log(`o fatorial de ${num} é ${result}`)