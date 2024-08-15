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
