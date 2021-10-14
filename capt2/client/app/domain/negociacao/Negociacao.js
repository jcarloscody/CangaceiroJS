class Negociacao {
    
    #data;
    #qquantidade;
    constructor(data, quantidade, valor){
        
        this.#qquantidade= quantidade;
        this.#data = data;
        this.valor = valor;
        //this.obtemVolume;
        //Object.freeze(this); //congelando a instancia do construtor
    }

    get obtemVolume() {
        return this.#qquantidade	*	this.valor;
    }

    get getDate(){
        return this.#data;
    }

    get Quantidade(){
        return this.#qquantidade;
    }

    get Data() {
        return this.#data
    }
}


var neg1 = new Negociacao(new Date(), 2, 0.9)
//console.log(neg1.obtemVolume)
//console.log(neg1.getDate)

//Object.freeze(neg1) //deixa o objeto inalteravel, isto é congelamento

/*neg1.valor = 12;
console.log(neg1.obtemVolume)
console.log(Object.isFrozen(neg1));*/






