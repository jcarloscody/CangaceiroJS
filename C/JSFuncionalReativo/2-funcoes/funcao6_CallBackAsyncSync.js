const fs = require('fs')
const path = require('path')  //o path tbm organiza essa questao de /

const caminho = path.join(__dirname, 'dados.txt') //__dirname pega o caminho atual do arquivo
const cominho2 = path.join(__dirname, "../1-intro")
console.log(cominho2);

function exibirConteudo(_, conteudo) {
    console.log(`Async: ${conteudo.toString()}`)
}

console.log('Inicio Asyn...')
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(`Async: ${conteudo.toString()}`))
console.log('Fim Asyn...')


console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')