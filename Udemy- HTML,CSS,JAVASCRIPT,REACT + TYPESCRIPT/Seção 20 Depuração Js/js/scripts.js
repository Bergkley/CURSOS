// 1 - strict
"use strict";

// const undefined = 10;

// 2 - console.log
let a = 1
let b = 2;

if( a == 1){
    a = b + 2;
}

for(let i = 0; i < b; i++){
    a = a + 2;
    console.log(a);
}

// 3 - debugger
let c = 1;
let d = 2;

if (c == 1){
    c = d + 2;
}

debugger;

// 4 - Tratamento de dados

function checkNumber(n){

    const result = Number(n);

    if(Number.isNaN(result)){
        console.log("Is not a number");
    }
    console.log("valor correto")
    return result;

}
checkNumber(5);

checkNumber("opa");

checkNumber("5");

// 5 - Exceptions
let x = 10;

if(x != 11){
    throw new Error("X não pode ser 11");
}

// 6 - Try Catch
try{
    const soma = x + y;
}catch(error){
    console.log(`Erro no programa ${error}`);
}

// 7 - finally
try{
    const value = checkNumber("asd")
    if(!value){
        throw new Error("Is not a number");
    }
}catch(erro){
    console.log(`Erro no programa ${erro}`);
}finally{
    console.log("Cheguei no finally");
}

// 8 - Assertions
function checkArray(arr){
    if(arr.length === 0){
        throw new Error("Vazio");
    }else{
        console.log(`O array tem ${arr.length} elementos`);
    }
}