const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const getTotal = item => item.qtde * item.preco
const somar = (acumulador, el) => acumulador + el

const totalGeral = carrinho
    .map(getTotal)
    .reduce(somar)

console.log(totalGeral)

Array.prototype.meuReduce = function (fn, inicial) {
    let acumulador = inicial
    for (let i = 0; i < this.length; i++) {
        if (!acumulador && i === 0) {
            acumulador = this[i]
        } else {
            acumulador = fn(acumulador, [i], i, this)
        }
    }
    return acumulador
}

const totalGeral2 = carrinho
    .map(getTotal)
    .meuReduce(somar)

console.log(totalGeral2)