"use strict";
/*
Testando funcionalidades do typescript
também configurei o tsconfig.json para que ele leia o diretório src, assim executando todos os arquivos e retornando/dando o resultado no diretório build
o comando 'npm run start' resume para apenas um comando tudo o que for necessário para a execução dos nossos arquivos
console.log('hello word');

type hero = {
    name: string;
    vulgo: string;
};

function PrintaObjetos(pessoa: hero) {
    console.log(pessoa);
}

PrintaObjetos({
    name: "Tony Stark",
    vulgo: "Homideferro",
});
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Tipos de variáveis:
//Tipos primitivos: boolean, number, string
let ligado = false; //:boolean(ou :TipoDeVariável restringe o tipo que a variável vai aceitar)
let nome = "Gabriel";
let idade = 30;
let numero = 30; //ele usa implicitamente o tipo de variável number
//tipos de variáveis especiais, null e undefined:
let nulo = null; //impedir que alguém coloque um parametro diferente de null
let indefinido = undefined; // ajudam a manter a segurança de certas propriedades que não queremos que outra pessoa altere
//Tipos abrangentes: any, void:
let retorno; //retorna o "valor" vazio
let retornoView = false; // quando a função retorna um valor não previsivel, isso permite que o retorno seja maleavel, assim podendo retornar qualquer coisa
//não existe sentido em utilizar todas as varáveis como any, pois se perde o poder do Typescript.
//objeto
//objeto sem previsibilidade
//definido como objeto ele não pode receber um valor comum como outra variável, tem que ser um objeto, algo entre chaves, mas ele não define quais propriedades
//o objeto tem que ter
//não é uma boa prática passar um objeto sem previsibilidade
let produto = {
    name: "Gabriel",
    cidade: "Brasilia",
    idade: 22,
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 2,
};
//Arrays
//tem duas maneiras de declarar um array no typescript
let dados = ["Gabriel", "Teles", "Medeiros", "de", "Aguiar"];
let dados2 = ["Gabriel", "Teles", "Medeiros", "de", "Aguiar"];
//Arrays de Multi Types
//Eu posso criar um vetor com mais de um tipo de valor recebido, tomar cuidado para não gerar bagunça
let indos = ["Gabriel", "Teles", "Medeiros", "de", "Aguiar", 22]; // | a barra siginifica ou
//Tuplas
//Tupla é um vetor de multi types , mas ela tem um espaço organizado e definido diferente do anterior que a ordem não importa
//Na tupla vc deterina o tipo e a ordem que os valores vão aparecer, no multi type vc só define o tipo.
let boleto = ["Agua", 93.65, 40028922];
//Métodos para usar Arrays
//São os mesmos métodos do javascript
//dados.map()
//Datas
let aniversario = new Date("2023-12-15 05:00"); //data no padão norte americano(tenho minhas duvidas de que só os estadunidenses fazem isso)
console.log(aniversario.toString());
//funções
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
let soma = addNumber(4, 7);
console.log(soma);
console.log(addToHello("Gabriel"));
// Funções Multi Tipos
function CallToPhone(phone) {
    return phone;
}
console.log(CallToPhone('99446-9777'));
//Função assincrona
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Gabriel";
    });
}
const bot2 = {
    id: 1,
    name: "magaman",
};
const bot = {
    id: 1,
    name: "magaman",
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello ${this.name}`;
    }
}
const p = new Pessoa(1, "Gabriel");
console.log(p.sayHello());
/*
data modifiers
public
private
protected
*/
// data modifiers também são aplicáveis em métodos
// classes
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.strength = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
// essa é uma subclasse pq herda da classe pai Character/ super class, magician é child/filha
class Magician extends Character {
    constructor(name, strenght, skill, magicPoints) {
        super(name, strenght, skill);
        this.magicPoints = magicPoints;
        this.name = name;
    }
}
const p1 = new Character("Gabriel", 10, 98);
p1.attack();
const p2 = new Magician("Gabriel", 9, 30, 100);
//generics
/*
uma função que junte vários arrays em um só
... operador spread(...)
*/
function concatArray(...itens) {
    return new Array().concat(...itens);
}
/*
usando as <T> eu posso delimitar o tipo do array usando o generic
const numArray = concatArray**<number[]>**([1, 5],[3]);
*/
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["Gabriel", "Eu mesmo"], ["teste"]);
console.log(numArray);
console.log(stgArray);
//Decorators
function ExibirNome(target) {
    console.log(target);
}
;
let Funcionario = class Funcionario {
};
Funcionario = __decorate([
    ExibirNome //@decorar o método
], Funcionario);
let Quincas = class Quincas {
};
Quincas = __decorate([
    ExibirNome
], Quincas);
//Decorators
function apiVersion(version) {
    return (target) => {
        Object.assign(target.prototype, { __version: version });
    };
}
let Api = class Api {
};
Api = __decorate([
    apiVersion("1.10")
], Api);
const api = new Api();
console.log(api.__version);
