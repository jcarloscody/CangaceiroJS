//INTERFACE - descreve a estrutura de um objeto. não será usado como um modelo, mas como um tipo personalizado

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