//INTERFACE - descreve a estrutura de um objeto. não será usado como um modelo, mas como um tipo personalizado. pode servir de um contrato com a class

interface Person {
    name: string;
    age: Number;
    greet(phrase: string): void;
}

let p1: Person;

p1 = {
    name : 'lk',
    age : 12,
    greet (phrase) {
        console.log(`${phrase}, my name ${this.name}`)
    }
}



type Animal =  { //tipo personalizado: enquanto que interface so podem ser usadas para descrever a estrutura de um objeto, o tipo é mais flexivel vc pode definir outras coisas tbm
    name: string;
    age: Number;
    greet(phrase: string): void;
}


//contrato com a class, interface nao tem implementação de methos
interface Greetable {
    name: string;

    greet(phrase: string): void;
}

class Perso implements Greetable {
    name: string;

    constructor(n: string){
        this.name = n;
    }

    greet(phrase: string): void {
        throw new Error("Method not implemented.");
    }

}


interface Greetable2 {
    name: string;
    readonly age: Number;   //numa interf não usamos public ou private mas podemos usar o readonly
}

//pode interfa extender interfac
interface Pr extends Greetable2{
    address: string;
}



//interfaces as function type = vc pode definir uma interface como uma funcao. é apenas uma alternativa pois tem outras melhores
interface AddFn {
    (n: number, n1: number): number
}

let add : AddFn

add = (n: number, n2: number) => {
    return n + n2;
}


interface Optional {
    name?: string;  //a classe pode ter ou nao
    age: number;
    add? (n1: number): void;
}


class O implements Optional {
    name?: string | undefined;
    age: number;
    
    constructor(a: number, n?: string ){
        this.age = a;
        this.name = n;
    }
}


let o = new O(2);