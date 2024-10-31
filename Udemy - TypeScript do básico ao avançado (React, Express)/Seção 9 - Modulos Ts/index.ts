// 1 - importação arquivo
import importGreet from "./greet.js";

importGreet();

// 2 - importação de variável
import { x } from "./variable.js";

console.log(x);

// 3 - multiplas importações
import {a,b, myFunction} from "./multiple.js";

console.log(a);
console.log(b);

myFunction(a,b)

// 4 - alias
import { someName as name } from "./changename.js";

console.log(name);

// 5 - import all 
import * as myNumbers from "./numbers.js";
console.log(myNumbers);

// 6 - import tipos
import { Human } from "./mytype.js";

class User implements Human {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const berg = new User("berg", 19);
console.log(berg)