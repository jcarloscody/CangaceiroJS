//https://github.com/cod3rcursos/javascript-funcional
function fn3() {
    setTimeout(() => { //-> 2 - coloca no event queue  // 5 -sai do event queue e coloca na stack
        console.log("timeout")
        main()//começa de novo - vai ficar recursivo com isso
    }, 3000);

    console.log("fn3") // 3 - volta para a fn2 e sucessivamente até a main()
}

function fn2() {
    fn3()
}

function fn1() {
    fn2()
}

function main() {
    fn1()
}

main() //1 - está na stack    // 4 - fim da stack