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

//interfaces (type x interface)

//type é mais usado para tipar um conjunto de objetos e interface é usado pra trabalhar com classe
// interface é um contrato que quem herdar precisa seguir 
type robot = {
    readonly id: number|string; //readonly é uma propriedade para permitir somente a leitura 
    name: string;
};

interface robot2 {
    id:number|string;
    name:string;
    sayHello():string;
}

const bot2: robot = {
    id: 1,
    name: "magaman",
}

const bot: robot = {
    id: 1,
    name: "magaman",
}

class Pessoa implements robot2{
    id: number|string;
    name: string;

    constructor(id:string|number, name:string){
        this.id = id
        this.name = name


    }
    sayHello(): string {
        return `hello ${this.name}`;
    }
}

const p = new Pessoa(1,"Gabriel");
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
    protected name?: string; //usando o private a unica maneira de acessar a propriedade é pelo método construtor
    //usando public é possivel acessar novamente do lado de fora o mesmo que não passar nada
    //o protected só permite que classes e subclasses que herdam dele possam acessar
    strength: number;
    skill: number;

    constructor(name:string, stregth:number, skill:number){
        this.name = name;
        this.strength = stregth;
        this.skill = skill;
        
    }

    public attack():void{
        console.log(`Attack with ${this.strength} points`);

    }
}
// essa é uma subclasse pq herda da classe pai Character/ super class, magician é child/filha
class Magician extends Character {
    magicPoints:number;
    constructor(name:string,
        strenght:number,
         skill:number,
         magicPoints:number
         ){
        super(name, strenght, skill);
        this.magicPoints = magicPoints;
        this.name = name;
    }
}

const p1 = new Character("Gabriel",10, 98);
p1.attack();

const p2 = new Magician("Gabriel", 9, 30, 100);


//generics
/*
uma função que junte vários arrays em um só
... operador spread(...)
*/

function concatArray<T>(...itens: T[]):T[]{
    return new Array().concat(...itens);
}
/*
usando as <T> eu posso delimitar o tipo do array usando o generic
const numArray = concatArray**<number[]>**([1, 5],[3]);
*/
const numArray = concatArray<number[]>([1, 5],[3]);
const stgArray = concatArray<string[]>(["Gabriel","Eu mesmo"],["teste"])
console.log(numArray);
console.log(stgArray);

//Decorators
function ExibirNome(target:any){
    console.log(target);
};

@ExibirNome //@decorar o método

class Funcionario{}

@ExibirNome

class Quincas{}

//Decorators
/*
function apiVersion(version:string){
    return (target:any) => {
        Object.assign(target.prototype, {__version: version});
    };
}

@apiVersion("1.10") */// injeta um gatilho na classe, o decorator a nivel de classe

//atributee decorator

/*
    Ao criar o atributo decorator podemos fazer um controle do numero de caracteres que serão inseridos no nosso código,
    um validador
    é um declarador muito utilizado por frameworks que colocamos em cima de uma propriedade
*/

function minLength(length: number){
    return (target:any, key:string) => {
        let _value = target[key];
//        console.log(key);
        const getter = () => "[play]"+_value;
        const setter = (value:string) => {
            if(value.length < length){
                throw new Error(`Tamanho menor do que${length}`);
            } else {
                _value = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}

class Api{
    @minLength(10)
    name:string;

    constructor(name:string){
        this.name = name;
    }
}

const api = new Api("usuaaaaaaarios");
//console.log(api.name);
console.log(api.name);