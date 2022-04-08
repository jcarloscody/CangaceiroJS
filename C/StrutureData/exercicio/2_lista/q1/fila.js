export class FilaBasica {
    constructor(size = 10) {
        this.inicio = 1;
        this.fim = 1;
        this.armazenamento = [];
        this.tamanho = 10;
    }

    equeue(dado) {
        this.armazenamento[this.fim] = dado
        this.fim++;
    }

    dequeue() {
        this.inicio++;
    }

    estaVazio() {
        return this.inicio === this.fim;
    }

    estaCheio() {
        return this.inicio < this.fim;
    }

    quantidade() {
        return this.fim - this.inicio;
    }
}

