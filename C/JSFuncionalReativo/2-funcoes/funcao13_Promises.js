setTimeout(function () {
    console.log('Executando callback...')

    setTimeout(function () {
        console.log('Executando callback...')

        setTimeout(function () {
            console.log('Executando callback...')
        }, 2000)
    }, 2000)
}, 2000)


function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)



function gerarNumerosEntre(min, max) {
    if (min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)