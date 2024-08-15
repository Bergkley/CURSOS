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