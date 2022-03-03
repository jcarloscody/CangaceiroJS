/**

await -> o runtime node nao suporta o uso desta palavra isolada, agora o dino sim. entao precisamos criar
uma funcao async para usa la

A IDDEIA -> é ter um codigo q parece sincrono, embora seja assincrono. ou seja em vez de chamar a fucnao then
da promise, ele fica parado esperando a execucao e so vai para a proxima linha quanod ele terminar a execucao.

 */

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}


//
async function retornarValorRapido() {
    return 20
}


async function executar() {
    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()