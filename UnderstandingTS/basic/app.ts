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