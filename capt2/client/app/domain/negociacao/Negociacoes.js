class Negociacoes {

    #negociacoes;

    constructor() {
        this.#negociacoes = [];
    }

    adiciona(negociacao) {
        this.#negociacoes.push(negociacao);
    }

    get Tnegociaoes() {
        return [].concat(this.#negociacoes);//vai retornar um novo array. não vai retornar uma referencia para o atributo, mas uma nova referencia fazendo assim uma blindagem para a nossa instancia.
    }

    get	volumeTotal() {
        return this.#negociacoes.reduce((total,	negociacao)=>{	
            return	total	+	negociacao.obtemVolume
        },	0);
    }
}