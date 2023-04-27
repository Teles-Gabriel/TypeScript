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
let ligado:boolean = false; //:boolean(ou :TipoDeVariável restringe o tipo que a variável vai aceitar)
let nome:string = "Gabriel";
let idade:number = 30;
let numero = 30; //ele usa implicitamente o tipo de variável number

//tipos de variáveis especiais, null e undefined:
let nulo:null = null; //impedir que alguém coloque um parametro diferente de null
let indefinido:undefined = undefined; // ajudam a manter a segurança de certas propriedades que não queremos que outra pessoa altere

//Tipos abrangentes: any, void:
let retorno:void //retorna o "valor" vazio
let retornoView:any = false; // quando a função retorna um valor não previsivel, isso permite que o retorno seja maleavel, assim podendo retornar qualquer coisa

//não existe sentido em utilizar todas as varáveis como any, pois se perde o poder do Typescript.

//objeto

//objeto sem previsibilidade
//definido como objeto ele não pode receber um valor comum como outra variável, tem que ser um objeto, algo entre chaves, mas ele não define quais propriedades
//o objeto tem que ter
//não é uma boa prática passar um objeto sem previsibilidade
let produto:object = {
    name:"Gabriel",
    cidade:"Brasilia",
    idade: 22,
};

//Objeto tipado com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto:ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 2,    
}

//Arrays

//tem duas maneiras de declarar um array no typescript

let dados:string[] = ["Gabriel","Teles","Medeiros","de","Aguiar"];
let dados2:Array<string> = ["Gabriel","Teles","Medeiros","de","Aguiar"];

//Arrays de Multi Types
//Eu posso criar um vetor com mais de um tipo de valor recebido, tomar cuidado para não gerar bagunça
let indos:(string|number)[] = ["Gabriel","Teles","Medeiros","de","Aguiar",22]; // | a barra siginifica ou

//Tuplas
//Tupla é um vetor de multi types , mas ela tem um espaço organizado e definido diferente do anterior que a ordem não importa
//Na tupla vc deterina o tipo e a ordem que os valores vão aparecer, no multi type vc só define o tipo.

let boleto:[string,number,number] = ["Agua", 93.65, 40028922];

//Métodos para usar Arrays
//São os mesmos métodos do javascript
//dados.map()

//Datas

let aniversario:Date = new Date("2023-12-15 05:00"); //data no padão norte americano(tenho minhas duvidas de que só os estadunidenses fazem isso)
console.log(aniversario.toString());

//funções

function addNumber(x:number,y:number):number{
    return x+y;
}

function addToHello(name:string):string{
    return `Hello ${name}`
}

let soma:number = addNumber(4,7);

console.log(soma);
console.log(addToHello("Gabriel"));

// Funções Multi Tipos

function CallToPhone(phone:number|string): number|string{// dentro   dos  parenteses o tipo define o que a função vai aceitar, fora o tipo define o que pode ser retornado
    return phone;
}

console.log(CallToPhone('99446-9777'))

//Função assincrona

async function getDataBase(id: number): Promise<string>{ //Sempre quue eu   tiver uma function async eu preciso retornar uma promise, nesse caso uma do tipo string
    return "Gabriel"
}

