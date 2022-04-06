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
        if (!this.eVazio) {
            this.indiceTopo--;
        }
    }


    topoValor() {
        if (!this.eVazio) {
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

        for (let i = this.indiceTopo; i > this.quantidade(); this.indiceTopo--) {
            if (!this.eVazio) {
                word += this.armazenamento[i];
                console.log(`indice ${i}   value: ${this.armazenamento[i]}`);
            }
        }
        return word;
    }
}

let abacaxi = new PilhaAbacaxi();
abacaxi.push("A")
abacaxi.push("b")
abacaxi.push("c")
abacaxi.push("d")

console.log(abacaxi.toString())



