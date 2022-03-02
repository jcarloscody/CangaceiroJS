/**
 * Arrow Function
 * spread
 * this 
 * 
 */


// arrow function - é uma funcao anonima - function expression
const felizNatal = () => console.log('Feliz Natal!!!!')  //return undefined
felizNatal()

const saudacao = nome => `Fala ${nome}, blz?!?`   //sem chaves pq tem apenas uma unica expressao
console.log(saudacao('Maria'))

const somar = (...numeros) => { //Rest Parameter - spread - pega tudo e joga num array 
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}

const subtrair = (a, b) => a - b

console.log(subtrair(4, 1))

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

const potencia = function (base) {
    return function (exp) {
        Math.pow(base, exp)
    }
}

const potencia2 = base => exp => Math.pow(base, exp)
console.log(potencia2(2)(10))


// this   - limitaçoes
Array.prototype.ultimo = function () {
    console.log(this[this.length - 1]) //este this referencia esta instancia do array. se vc estivesse usando o ARROW FUNCTION o this 
    //faria referencia ao global
}

Array.prototype.primeiro = function () {
    console.log(this[0])
}


const numeros = [-333, 1, 2, 3, 500]
numeros.ultimo()
numeros.primeiro()