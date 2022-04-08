/**
Uma estrutura de dados do tipo pilha pode ser usada em um algoritmo que permite 
imprimir uma palavra de forma invertida. Por exemplo, ABACAXI deve ser impresso IXACABA. 
Utilizando uma pilha e suas operações base, desenvolva a função inverte que recebe uma String e, 
utilizando as funções push e pop da pilha, retorne a palavra de forma invertida.

 */

//last-in first-out



class PilhaAbacaxi {

    constructor(size = 7) {
        this.indiceTopo = 1;
        this.armazenamento = [];
        this.limite = size;
    }

    push(dado) {
        if (!this.eCheio()) {
            this.armazenamento[this.indiceTopo] = dado;
            this.indiceTopo++;
        }
    }

    pop() {
        if (!this.eVazio()) {
            this.indiceTopo--;

            // return this.armazenamento[this.indiceTopo]
        }
    }


    topoValor() {
        if (!this.eVazio()) {
            return this.armazenamento[this.indiceTopo - 1]
        }
    }

    quantidade() {
        return this.indiceTopo - 1;
    }

    eVazio() {
        return this.indiceTopo - 1 === 0;
    }

    eCheio() {
        return this.indiceTopo === this.capacidade();
    }

    capacidade() {
        return this.limite;
    }

    toString() {
        let word = '';

        for (let i = this.indiceTopo - 1; i > 0; i--) {

            if (!this.eVazio()) {
                word += this.armazenamento[i];
                console.log(`indice ${i}   value: ${this.armazenamento[i]}`);
            }


        }
        return word;
    }
}

let abacaxi = new PilhaAbacaxi();

console.log(`está cheio? ${abacaxi.eCheio()}`)
console.log(`está vazio? ${abacaxi.eVazio()}`)
console.log(`quantidade: ${abacaxi.quantidade()}`)
console.log(`capacidade: ${abacaxi.capacidade()}`)

abacaxi.push("A")
abacaxi.push("B")
abacaxi.push("C")
console.log(abacaxi.toString())

console.log()
console.log()
console.log()

console.log(abacaxi.topoValor())

abacaxi.pop()

console.log(abacaxi.topoValor())

console.log(`está cheio? ${abacaxi.eCheio()}`)
console.log(`está vazio? ${abacaxi.eVazio()}`)
console.log(`quantidade: ${abacaxi.quantidade()}`)
console.log(`capacidade: ${abacaxi.capacidade()}`)









