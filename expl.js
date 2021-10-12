//Object.assign  - copia n objetos e cola e outro
/*var origem1 = {nome: 'Cangaceiro'};
var origem2 = {idade: 20};
var destino = {uf: 'pe'};
Object.assign(destino, origem1, origem2);
console.log(destino)
var dest = Object.assign({}, destino)
console.log(dest)




//DECLARAÇÃO VAR
for(var	i =	1;i<=100;i++) {
    console.log(i);
}
alert(i);//valor 101, pois var não fica preso no escopo

function exibeNome() {
    alert(nome); //undefined,  Isso	 acontece	 porque	 variáveis	 declaradas	 com var		são	içadas	(hoisting)	para	o	início	do	bloco	da	função	na	qual foram	declaradas.
    var nome = 'Flávio Almeida'; //var fica preso no escopo da funcao
    var nome = 'pode ser redeclarada'; 
    alert(nome);
}
exibeNome();// exibe Flávio Almeida
alert(nome);// não definido*/




//DECLARAÇÃO LET
//fica preso dentro de todos os blocs de escopos
//não pode ser redeclarada dentro do mesmo escopo
//içamento: Variáveis	declaradas	com		let		também	são	içadas	(hoisting). Contudo,	 seu	 acesso	 só	 é	 permitido	 após	 receberem	 uma atribuição;	 caso	 contrário,	teremos	 um	 erro. chamado Temporal Dead Zone.




var nome = "josue"
arrayNome = nome.split('')
console.log(arrayNome)
var nomeUniao = arrayNome.join(',');//une com virgula
console.log(nomeUniao)
console.log(nomeUniao.replace(/,/g,'#')); //substitui todas as , pelo #