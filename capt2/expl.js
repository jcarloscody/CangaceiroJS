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



//spread operator      ---   permite	 tratar	 cada	 elemento	 do	 array	 como	 um	 elemento.   separa cada elemento
console.log(...nome)



//funcao map()
console.log(new Date(...'2021-01-01'.split('-').map((item, indice)=>{
    if(indice==1){
        return item-1;
    }
    return item;
})))

console.log([0,1,5].map((item, indice)=>{ //método cria uma nova matriz com os resultados da chamada de uma função para cada elemento da matriz.
    return item - indice % 2;
}))



//DATA
var data = new Date()
var dataAjust = data.getDay() + "-" +  (data.getMonth()+1) + "-" + data.getFullYear();
console.log(dataAjust)



/// lançamento de exceções
//throw new Error('Esta	classe	não	pode	ser	instanciada');


//template literal `` e interpolacao ${}
var nome = 'Flávio';
var idade	=	18;
console.log(`A ${idade} de ${nome} é idade.`);



//reduce ->>>>  recebe	 dois	 parâmetros:	 a	 lógica	 de redução	e	o	valor	inicial	da	variável	acumuladora,	respectivamente. A	função	 com	 a	lógica	de	redução	nos	dá	 acesso	 ao	 acumulador, que	 chamamos	 de	 	total	,	 e	 ao	 item	 que	 estamos	 iterando, chamado	de		negociacao
console.log([1,2,3].reduce((total, item) => {
    return total + item
}, 0))


//VARIAVES
const	nome	=	'Flávio';
nome	=	'Almeida';	//	resulta	no	erro. não	 podemos	 usar	 novamente	 o operador 	=		 para	 atribuir	 um	 novo	 valor	 a	 variável.

//>> Use		const		sempre	que	possível.
//>> Utilize	 	let		 apenas	 se	 a	 variável	 precisar	 receber novas	 atribuições,	 por	 exemplo,	 uma	 variável totalizadora.
//>> Não	use		var	,	 pois	 a	 única	 maneira	 da	 variável	 ter escopo	é	quando	declarada	dentro	de	uma	função.