//Implemente uma pilha usando a implementação de duas filas básicas.
//fila - primeiro entra  - primeiro a sair
//pilha - o ultimo a entra - primeiro a sair

import { FilaBasica } from "./fila.js";

class Pilha {
    constructor(filaPrimaria, filaSecundaria) {
        this.filaPrimaria = filaPrimaria;
        this.filaSecundaria = filaSecundaria;
    }

    push(dado) {
        this.filaPrimaria.equeue(dado);
    }

    pop() {
        let inicio = this.filaPrimaria.inicio;
        let fim = this.filaPrimaria.fim - 1;

        for (let i = fim; i >= inicio; i--) {
            this.filaSecundaria.equeue(this.filaPrimaria.armazenamento[i]);
        }

        this.filaSecundaria.dequeue();
        this.filaPrimaria.inicio = 1;
        this.filaPrimaria.fim = 1;
        inicio = this.filaSecundaria.inicio;
        fim = this.filaSecundaria.fim - 1;
        for (let i = fim; i >= inicio; i--) {
            this.filaPrimaria.equeue(this.filaSecundaria.armazenamento[i]);
        }

        this.filaSecundaria.inicio = 1;
        this.filaSecundaria.fim = 1;
    }


    toString() {
        let inicio = this.filaPrimaria.inicio;
        let fim = this.filaPrimaria.fim;

        for (let i = inicio; i < fim; i++) {
            console.log(`indice: ${i}   value: ${this.filaPrimaria.armazenamento[i]}`);
        }
    }
}


let pila = new Pilha(new FilaBasica(10), new FilaBasica(10));

pila.push('A');
pila.push('B');
pila.push('C');

pila.toString();
console.log()
console.log()
console.log()


pila.pop();

pila.toString();

pila.push('C');
pila.push('D');
pila.push('E');
console.log()
console.log()
console.log()
pila.toString();

