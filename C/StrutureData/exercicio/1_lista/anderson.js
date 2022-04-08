class Pilha {
    constructor(size = 10) {
        this.topo = 0
        this.dados = []
        this.maxSize = size
    }

    push(dado) {
        if (!this.isFull()) {
            this.dados[this.topo] = dado
            this.topo++
        } else {
            throw new Error("stack overflow")
        }
    }

    pop() {
        if (!this.isEmpty()) {
            this.topo--
            return this.dados[this.topo]
        } else {
            throw new Error("stack underflow")
        }
    }

    top() {
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
        return this.topo;
    }

    toString() {
        let word = '';

        for (let i = this.topo - 1; i > 0; i--) {

            if (!this.isEmpty()) {
                word += this.dados[i];
                console.log(`indice ${i}   value: ${this.dados[i]}`);
            }
        }


        return word;
    }
}
/*
inverter(){

    this.dados.forEach(element => {
        
    });
}
*/


let p = new Pilha

p.push('A')
p.push('B')
p.push('A')
p.push('C')
p.push('A')
p.push('X')
p.push('I')

console.log(p.toString())