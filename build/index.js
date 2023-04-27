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
