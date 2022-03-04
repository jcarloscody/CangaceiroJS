// Função Contrutora
function Produto(nome, preco, desc = 0.50) {
    this.nome = nome
    this.preco = preco
    this._desc = desc

    this.precoFinal = function () {
        return this.preco * (1 - this._desc)
    }
}

Produto.prototype.log = function () { //atribui uma funcionalidade, define uma propriedade ao objeto Produto
    console.log(`Nome: ${this.nome} Preço: R$ ${this.preco}`)
}

let pp = new Produto("jouse");
pp.log()

const p1 = new Produto('Caneta', 10)
console.log(p1.nome)
p1.log()


Object.defineProperty(Produto.prototype, 'desc', { //define propriedade no prototype do objeto. vai servir para todos os objetos criados. essa questao de herança no mundo
    //js é baseado em prototipo, vc tem um prototipo associado a funcao q vc criou e estes prototipos vai definir como as intancias serao criadas
    //aqui vai definir para todos os produtos criados, com o nome desc, e os atributos
    get: function () {
        return this._desc
    },
    set: function (novoDesc) {
        if (novoDesc >= 0 && novoDesc <= 1) {
            this._desc = novoDesc
        }
    }
})

Object.defineProperty(Produto.prototype, 'descString', {
    get: function () {
        return `${this._desc * 100}% de desconto!`
    },
})



const p2 = new Produto('Geladeira', 3000)
console.log(p2.preco)
console.log(p2.precoFinal())

p2.desc = 0.99
console.log(p2.desc)
console.log(p2.descString)