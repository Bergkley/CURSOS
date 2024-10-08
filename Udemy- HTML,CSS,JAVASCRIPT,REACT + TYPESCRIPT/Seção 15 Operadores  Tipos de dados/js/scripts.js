// 1 - Number
console.log(typeof 2);
console.log(typeof 2.2);
console.log(typeof -4);

// 2 - Ops. aritméticas

console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 4);
console.log(10 / 2);

// 3 - Special Numbers
console.log(typeof Infinity);

console.log(12 * "asd");

console.log(typeof NaN);

// 4 - Strings
console.log("Um texto");
console.log(`Mais um texto`);

console.log(typeof "Opa");

// 5 - Símbolos especiais em string
console.log("Testando \n quebra de linha");

console.log("Espaçamento \t de tab");

// 6 - Concatenação
console.log("Oi, " + " tudo " + "bem?");

console.log(`Testando ` + `Concatenação`);

// 7 - Interpolação
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa ${console.log("teste")}`);

//8- Boolean
console.log(typeof true);
console.log(typeof false);
console.log(20 > 5);
//9- Comparações
console.log(2 == 2);
console.log(2 == "2");
console.log(2 != 2);
console.log(2 != 3);
console.log(2 > 2);
console.log(2 < 2);
console.log(2 >= 2);
console.log(2 <= 2);
console.log(2 === 2);
// 10- Idêntico
console.log(9 == "9");
console.log(9 === "9");
console.log(9 != "9");
console.log(9 !== "9");
// 11- Operadores Lógicos
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(!true);
console.log(!false);
console.log(5 > 2 && 10 > 20);
console.log(5 > 2 || 10 > 20);
// 12- Empaty values
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);
// 13- Conversão de tipo automatica
console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);
