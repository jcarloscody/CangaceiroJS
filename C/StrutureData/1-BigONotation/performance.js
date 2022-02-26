/*
BigOnotation:: é apenas uma maneira de contagem fuzzy formalizada. ele nos permite falar de uma maneira muito formal
sobre como o tempo de execucao de um algoritmo cresce a medida que as entrdas aumenta
*/




function addUpTo(n) {
    let total;
    for (let index = 1; index < n; index++) {
        total += index;
    }

    return total;
}

let t1 = performance.now(); //inidica o milissegundo que o navegador iniciou a documentacao
addUpTo(1000000000);
let t2 = performance.now();//aqui ofim
console.log(`time elapsed: ${(t2 - t1) / 1000} seconds`)




//SECOND SOLUTINO
console.warn('SECOND SOLUTION');
function addUpToSecond(params) {
    return params * (params + 1) / 2;
}
let t3 = performance.now(); //inidica o milissegundo que o navegador iniciou a documentacao
addUpToSecond(1000000000);
let t4 = performance.now();//aqui ofim
console.log(`time elapsed SECOND: ${(t4 - t3) / 1000} seconds`)
