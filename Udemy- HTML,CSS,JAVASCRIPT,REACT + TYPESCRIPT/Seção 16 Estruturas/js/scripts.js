// 1- Variaveis
let nome = "Bergkley";
const idade = 31;
// 2- mais sobre variaveis
let a = 10,b=20,c=30;
let _teste= "ok";
let $teste2 = "ok2";
// 3- Prompt
let age = prompt("Qual seu idade?");
// 4- alert
alert("Seu nome e: " + nome);
// 5- Math
console.log(Math.max(10,20,30));
console.log(Math.floor(5.14));
console.log(Math.ceil(5.5));
// 6- console
console.log("teste");
console.error("erro");
console.warn("aviso");
// 7- if
const m = 10;
if(m > 5){
    console.log(" M Maior que 5");
}
const user = "João";
if(user === "João"){
    console.log("Seu nome é João");
}
// 8- else
const loggedIn = false;
if(loggedIn){
    console.log('Está autenticado');
}else{
    console.log('Não está autenticado');
}
// 9- else if
if(1 > 2){
    console.log("1 maior que 2");
}else if(2>3){
    console.log("2 maior que 3");
}else{
    console.log("3 maior que 1");
}
// 10- While
let i = 0;
while(i < 5){
console.log(`Repetindo: ${i}` )
i++;
}