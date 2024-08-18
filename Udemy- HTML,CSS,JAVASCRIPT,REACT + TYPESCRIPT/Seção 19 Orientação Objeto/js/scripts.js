// 1 - métodos
const animal = {
    nome: "Bob",
    latir: function () {
        console.log("Au au");
    }
};

console.log(animal.latir())

// 2 - mais sobre metodos
const pessoa = {
    nome: "João",
    getNome: () => {
        return this.nome
    },
    SetNome: function (nome) {
        this.nome = nome;
    }
}
console.log(pessoa.getNome())
pessoa.SetNome("Joaquim")
console.log(pessoa.getNome())

// 3 - Prototype
const text = "asd"
console.log(Object.getPrototypeOf(text))

const bool = true;
console.log(Object.getPrototypeOf(bool))

// 4 - mais sobre prototype
const myObject = {
    a: "b"
}
const mySecondObject = Object.create(myObject);
console.log(mySecondObject.a)
console.log(Object.getPrototypeOf(mySecondObject) === myObject)