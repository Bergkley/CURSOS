// // 1 - setTimeout
console.log("Ainda não executou");
setTimeout(() => {
    console.log("Executou depois de 2 segundos SETTIMEOUT");
}, 2000);
console.log("Depois de executar");

// // 2 - setInterval
console.log("Ainda não executou");
setInterval(() => {
    console.log("Executou depois de 2 segundos SETINTERVAL");
}, 2000);
console.log("Depois de executar");

// // 3 - Promises
const promessa = Promise.resolve(5 + 5);
promessa.then(value => console.log(value))

// // 4 - Falha na promise
Promise.resolve(4 * "asd")
.then((n)=>{
    if(Number.isNaN(n)){
        throw new Error("Is not a number")
    }
})
.catch(erro => console.log(erro))

// 5 - rejeição promise
function checkNumber(n){
    return new Promise((resolve, reject)=>{
        if(n > 10){
            resolve(n)
    }else{
        reject(new Error("Numero muito baixo"))
    }
    })
}
const a = checkNumber(20)
const b = checkNumber(10)

a.then((v)=> console.log(`o resultado é ${v}`)).catch((e)=> console.log(e))
b.then((v)=> console.log(`o resultado é ${v}`)).catch((e)=> console.log(e))

// 6 - promisse all
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10)
    }, 3000)    
})

const p2 = Promise.resolve(10 +10);

const p3 = new Promise((resolve, reject) => {
    if(30 > 10){
        resolve(30)
    }else{
        reject("Erro!");
    }
})
Promise.all ([p1, p2, p3]).then(values => console.log(values))

// 7 - Async function
async function somarComDelay(a,b){
    return a + b
}
somarComDelay(2,4).then(value => console.log(value))

// 8 - Async Await
function resolveComDelay (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolveu a Promise");
        }, 2000)
    })
}

async function chamadAsync() {
    console.log("Chamada a promise, e esperando o resultado");
    const result = await resolveComDelay();
    console.log(result);
}
chamadAsync()

// 9 - Generators
function* generator(){
    yield 1;
    yield 2;
}
const g = generator();
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)