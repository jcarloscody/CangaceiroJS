//tsc

function add(n1:number, n2: number) {
    console.log(typeof n1);
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error("Only numbers");
    // }
    const result = n1 + n2; //inferencia
    return result;
}

const num1: number = 2;//redundante, pq o ts infere e vc explicita

console.log(add(num1,56));


//objects
let person1: { //sem boa pratica
    nome: string;
    age: number;
} = {
    nome : 'lmk',
    age : 12
};

let person2= {// boa pratica - infere
    nome: 'josue',
    age: 25
}

const pers = {
    id: 1,
    price: 22.2,
    tags: ['josu', 'jose'],
    details: {
      title: 'notes',
      description: 'sem esquecimento'
    }
} 

person1.nome = 'carlos';
person2.nome = 'silv';
person1.nome = 'car';


//ARRAYS
let favoriteActivities: string[];
favoriteActivities = ['bike', 'walking'];
let others : any[];
others = ['study', 10000]

for (const iterator of pers.tags) {
    console.log(iterator);
}


//TUPLES
let p : { //dessa vez devemos explicitar pq como estamos usando tupla, a inferencia nao funciona
    nome: string;
    role: [number, string]
} = {
    nome: 'josue',
    role: [2, 'author']
}

p.role.push('sd');//atencao a este comando. mesmo sendo tupla(tamanho fixo), ainda compila o push

console.log(p.role)

//ENUMS
enum Role {ADM, READ_ONLY, AUTHOR};//0 1 2
enum Role2 {ADM=1, READ_ONLY, AUTHOR};//1 2 3
enum Role3 {ADM=1, READ_ONLY=22, AUTHOR=12};
enum Role4 {ADM='ADM', READ_ONLY='R', AUTHOR=12};
let p2 = {
    role: Role.ADM
}

console.log(p2.role)

//any é desvangatagem
let favoriteActivities2 :  any[];
favoriteActivities2 = ['sd',1];



//UNION TYPES
function combine(input1:string | number, input2: number | string, resultAs: 'as-number' | 'as-text') { //esse resultAs é chamado tipo literal
    let result;

    if (typeof input1 ==='number' && typeof input2==='number' && resultAs === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}


console.log(combine('shoso', 2, 'as-number'));


//TYPE ALIASES | CUSTOM TYPES
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
function combine3(input1:Combinable, input2: Combinable, resultAs: ConversionDescriptor) { //esse resultAs é chamado tipo literal
    let result;
    if (typeof input1 ==='number' && typeof input2==='number' && resultAs === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}



type User = { name: string; age: number };

const u1: User = { name: 'Max', age: 30 }; // this works!

function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
}



//FUNCTIONS AS TYPES - nos permite descrever qual tipo de funcao especificamente quremos usar em algum lugar

function addd(n1:number, n2: number) {
    return n1 + n2;
}

let combineValues: (a:number, b:number)=>number;
//combineValues = 2; erro
combineValues = addd;
console.log('++++' + combineValues(9,9));