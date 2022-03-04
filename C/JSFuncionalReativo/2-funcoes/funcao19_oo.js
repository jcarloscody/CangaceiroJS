// Função Contrutora
function Produto(nome, preco, desc = 0.50) {//
    this.nome = nome //o this coloca o atributo dentor da instancia criada
    this.preco = preco
    this.desc = desc
    let variavelPrivada; //se quiser algo privada a funcao, so declarar assim

    this.precoFinal = function () {
        return this.preco * (1 - this.desc)
    }
}

console.log(typeof Produto)

const p1 = new Produto('Caneta', 10)
console.log(p1.nome)

const p2 = new Produto('Geladeira', 3000)
console.log(p2.preco)
console.log(p2.precoFinal())