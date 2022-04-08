/*
QUESTÃO 3. Uma Pilha pode ser definida como um conjunto ordenado de dados, no qual 
os dados podem ser inseridos ou removidos a partir de uma extremidade chamada topo 
da pilha. Duas pilhas A e B podem ser implementas a partir do compartilhamento do 
mesmo vetor de tamanho determinado, como apresentado na figura a seguir. Escreva as 
seguintes funções em Javascript.

i. Declarações de constantes e procedimento de inicializar as pilhas (os valores de topoA e topoB).
ii. As funções ÉVaziaA e ÉVaziaB.
iii. As funções empilhaA, empilhaB, desempilhaA e desempilhaB. Só deve ser emitida uma mensagem de 
pilha cheia se todas as posições do vetor estiverem ocupadas.

*/



class PilhaPai {
    constructor(size = 6) {
        this.armazenamento = [];
        this.topo = 1;
        this.maxSize = size;
    }

    push(dado) {
        if (!this.isFull()) {
            this.armazenamento[this.topo] = dado
            this.topo++
        } else {
            throw new Error("stack overflow")
        }
    }

    pop() {
        if (!this.isEmpty()) {
            this.topo--
            // return this.dados[this.topo]
        } else {
            throw new Error("stack underflow")
        }
    }

    topValue() {
        if (!this.isEmpty()) {
            return this.dados[this.topo - 1]
        }
    }

    isFull() {
        return this.length() === this.maxSize
    }

    isEmpty() {
        return this.length() === 0
    }

    length() {
        return this.topo - 1;
    }
}
