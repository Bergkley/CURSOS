// 1 - var,let e const
var x = 10;
var y = 15;

if(y > 10){
    var x = 5;
    console.log(x);
}

let a = 10;
let b = 15;

if(b > 10){
    let a = 5;
    console.log(a);
}
console.log(a)

// 2 - Arrow function

const sum = function(a,b) {
    return a + b
}

const arrowSum = (a,b) => a + b

console.log(sum(1,2))
console.log(arrowSum(1,2))

const greeting = (name)=> {
    if(name){
        return `Hello ${name}` 
    }else{
        return "Hello"
    }
}
console.log(greeting("João"))

const user = {
    name: "João",
    sayUserName: () => {
        setTimeout(function (){
            console.log(this)
            console.log(`Username: ${this.name}`)
        },1000)
    },
    sayUserNameArroy () {
        setTimeout(() => {
            console.log(this)
            console.log(`Username: ${this.name}`)
        },1000)
    }  
}

user.sayUserName();
user.sayUserNameArroy();

// 3 - Filter

const arr = [1,2,3,4,5,6,7,8,9,10];
const highNumbers = arr.filter((n)=>{
    if(n >=3){
        return n
    }
})

const users = [
    {name: "Bergkley", available: true},
    {name: "Vitoria", available: false}
]

const availableUsers = users.filter((user) => user.available)
console.log('available',availableUsers)