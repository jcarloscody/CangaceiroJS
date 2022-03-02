//retorno de funcao

function executarQualquerCoisa(fn) {
    console.log(typeof fn)

    if (typeof fn === "function") {
        fn()
    }
}

function bomDia() {
    console.log("bom dia")
}

const boaTarde = function () {
    console.log("boa tarde")
}

executarQualquerCoisa(boaTarde)


//RETORNANDO UMA FUNCAO A PARTIR DE OUTRA FUNCAO
function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}

let pot = potencia(2);
console.log(pot(3))
console.log(potencia(3)(2))