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

// 4 - Map
const products = [
    {name: "Tablet", price: 2000, category: "Eletronics"},
    {name: "Mouse", price: 50, category: "Eletronics"},
    {name: "Book", price: 30, category: "Books"},
    {name: "Calça Jeans", price: 800, category: "Roupas"},
    {name: "Keyboard", price: 100, category: "Eletronics"},
];

products.map((product) => {
    if(product.category === "Roupas"){
        product.onSale = true;
    }
})
console.log(products)

// 5 - template literals
const userName = "Berg";
const age = 19;

console.log(`o nome do usuário é ${userName} e ele tem ${age} anos`)

//  6 - Destructuring

const fruits = ["Apple", "Banana", "Orange"];

const [f1,f2,f3] = fruits
console.log(f1,f2,f3)

const productDetails = {
    name: "Tablet",
    price: 2000,
    category: "Eletronics",
    color: "Cinza"
}
const {name, price, category, color} = productDetails;

console.log(`O nome do produto é ${name}, o preço e ${price} e a categoria ${category}`)

// 7 - Spread operator

const a1 = [1,2,3];
const a2 = [4,5,6];

const a3 = [...a1, ...a2];

const a4 = [0, ...a3,7];

const carName = {name:"Gol"};
const carBrand = {brand:"Volkswagen"};
const otherInfos = {km:10000, color:"Black"};

const car = {...carName, ...carBrand, ...otherInfos};

// 8 - Classes
class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount){
        return this.price * (100 - discount/100);
    }
}

const shirt = new Product("Camisa", 30);
console.log(shirt.productWithDiscount(20))

// 9 - Herança
class ProductWithAttributes extends Product {
    constructor(name, price, color){
        super(name, price);
        this.color = color;
    }
    showColors(){
        console.log("As cores são:");
        this.color.forEach(color => console.log(color));
    }
}
const hat = new ProductWithAttributes("Chapeu", 20, ["Azul", "Vermelho", "Preto"]);

console.log(hat)
console.log(hat.name)
hat.showColors();