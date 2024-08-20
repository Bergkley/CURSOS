// 1 - setTimeout
console.log("Ainda não executou");
setTimeout(() => {
    console.log("Executou depois de 2 segundos SETTIMEOUT");
}, 2000);
console.log("Depois de executar");

// 2 - setInterval
console.log("Ainda não executou");
setInterval(() => {
    console.log("Executou depois de 2 segundos SETINTERVAL");
}, 2000);
console.log("Depois de executar");