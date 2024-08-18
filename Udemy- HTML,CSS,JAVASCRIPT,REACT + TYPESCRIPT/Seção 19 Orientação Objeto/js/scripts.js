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

// 5 - classes básicas
const cachorro = {
    raca: null,
    patas:4
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemao";

// 6 - função como classe - função construtora
function criarCachorro(nome,raca){
    const cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.nome = nome;
    return cachorro
}
const bob = criarCachorro("Bob","Pastor Alemao");

// 7 - Função como classe
function Cachorro(nome,raca){
    this.nome = nome;
    this.raca = raca
}
const husky = new Cachorro("Ozzy","Husky");

// 8 - metodos na funcao construtora
Cachorro.prototype.uivar = function(){
    console.log("Au au")
}
husky.uivars();

// 9 - Classes es6
class CachorroClasse {
    constructor(nome,raca){
        this.nome = nome;
        this.raca = raca
    }
}
const jeff = new CachorroClasse("Jeff","Pastor Alemao");

// 10 - mais sobre classes
class Caminhao {
    constructor(eixos,cor){
        this.eixos = eixos;
        this.cor = cor
    }
    descreverCaminhao(){
        console.log(`Caminhão de ${this.eixos} e de cor ${this.cor}`)
    }
}

const caminhao = new Caminhao(6,"Vermelho");
caminhao.descreverCaminhao()

// 11 - Override
class Humano {
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade
    }
}
Humano.prototype.idade = "Não definida";

// 12 - Symbols
class Aviao {
    constructor(marca, turbinas){
        this.marca = marca;
        this.turbinas = turbinas
    }
}
const asas = Symbol();
Aviao.prototype[asas] = 2;

// 13 - Getters e Setters

class Post {
    constructor(titulo,descricao,tags){
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags
    }

    get exibirTitulo(){
        return `O tiúlo é ${this.titulo}`
    }

    set adicionarTags(tags){
        const tagsArrays = tags.split(",")
        this.tags = tagsArrays
    }

}
const myPost = new Post("Algum titulo ","Descricão sobre titulo");
myPost.adicionarTags = "Programação,Js,Python"

// 14 - Herança
class Mamifero {
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Mamifero {
    constructor(patas,nome){
        super(patas,patas);
        this.nome = nome
    }
}
const shark = new Lobo(4,"shark");