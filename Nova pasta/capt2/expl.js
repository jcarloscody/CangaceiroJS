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

var nome = "josue";
arrayNome = nome.split("");
console.log(arrayNome);
var nomeUniao = arrayNome.join(","); //une com virgula
console.log(nomeUniao);
console.log(nomeUniao.replace(/,/g, "#")); //substitui todas as , pelo #

//spread operator      ---   permite	 tratar	 cada	 elemento	 do	 array	 como	 um	 elemento.   separa cada elemento
console.log(...nome);

//funcao map()
console.log(
	new Date(
		..."2021-01-01".split("-").map((item, indice) => {
			if (indice == 1) {
				return item - 1;
			}
			return item;
		})
	)
);

console.log(
	[0, 1, 5].map((item, indice) => {
		//método cria uma nova matriz com os resultados da chamada de uma função para cada elemento da matriz.
		return item - (indice % 2);
	})
);

//DATA
var data = new Date();
var dataAjust =
	data.getDay() + "-" + (data.getMonth() + 1) + "-" + data.getFullYear();
console.log(dataAjust);

/// lançamento de exceções
//throw new Error('Esta	classe	não	pode	ser	instanciada');

//template literal `` e interpolacao ${}
var nome = "Flávio";
var idade = 18;
console.log(`A ${idade} de ${nome} é idade.`);

//reduce ->>>>  recebe	 dois	 parâmetros:	 a	 lógica	 de redução	e	o	valor	inicial	da	variável	acumuladora,	respectivamente. A	função	 com	 a	lógica	de	redução	nos	dá	 acesso	 ao	 acumulador, que	 chamamos	 de	 	total	,	 e	 ao	 item	 que	 estamos	 iterando, chamado	de		negociacao
console.log(
	[1, 2, 3].reduce((total, item) => {
		return total + item;
	}, 0)
);

//VARIAVES
//const nome = "Flávio";
//nome = "Almeida"; //	resulta	no	erro. não	 podemos	 usar	 novamente	 o operador 	=		 para	 atribuir	 um	 novo	 valor	 a	 variável.

//>> Use		const		sempre	que	possível.
//>> Utilize	 	let		 apenas	 se	 a	 variável	 precisar	 receber novas	 atribuições,	 por	 exemplo,	 uma	 variável totalizadora.
//>> Não	use		var	,	 pois	 a	 única	 maneira	 da	 variável	 ter escopo	é	quando	declarada	dentro	de	uma	função.

//funcao call(contexto que será usado como this na chamada da função, parâmetro recebido por esta função).

//this da arrow function:: o	 escopo	 de	 seu	 	this		 é	 léxico	 (estático)	 em	 vez	 de dinâmico. O		this		de	uma	arrow	function	obtém	seu	valor	do	"código	ao redor",	 mantendo	 esse	 valor	 independente	 do	 lugar	 onde	 é chamado.

//Padrão de projeto Proxy:::::  trata-se	 de "um	 farsante".	 Lidamos	 com	 um	 Proxy	 como	 se	 ele	 fosse	 a instância	 do	 objeto	 que	 estamos	 querendo	 manipular,	 por exemplo,	uma	instância	de		Negociacoes	.	Ele	 é	 uma	 casquinha que	 envolve	 a	 instância	 que	 desejamos	 manipular	 e,	 para	 cada propriedade	 e	 método	 presente	 nessa	 instância,	 o	Proxy	 terá	 um correspondente.

//API	 Reflect	 (https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Reflect) Esta	API	centraliza	uma série	 de	 métodos	 estáticos	 que	 permitem	 a	 leitura,	 escrita	 e chamada	 de	 métodos	 e	 funções	 dinamicamente,	 um	 deles	 é	 o Reflect.set()

//variavel implicita arguments
function exibeNomeCompleto() {
	console.log(`Nome	completo:	${arguments[0]}	${arguments[1]}`);
}

exibeNomeCompleto("Flávio", "Almeida");


//padrao de projeto Factory::: O	 padrão	 de	 projeto	 Factory	 auxilia	 na	 criação	 de	 objetos complexos,	 encapsulando	 os	 detalhes	 de	 criação	 desses	 objetos, como	no	caso	dos	nossos	proxies


//CALLBACK HELL - uma	 estrutura	 peculiar	 em	 nosso	 código	 resultante	 de operações	 assíncronas	 que	 lembra	 uma	 pirâmide	 deitada.
const	service	=	new HttpService();
let	resultado	=	[];
service.get('http://wwww.endereco1.com',	(err,	dados1)	=>	{
	resultado	=	resultado.concat(dados1);
	service.get('http://wwww.endereco2.com',	(err,	dados2)	=>	{
	resultado	=	resultado.concat(dados2);
	service.get('http://wwww.endereco3.com',	(err,	dados3)	=>	{
	resutado	=	resultado.concat(dados3);
	service.get('http://wwww.endereco4.com',	(err,	dados4)	=>	{
	resultado	=	resultado.concat(dados4);
console.log('Lista	completa');
console.log(resultado);
	});
	});
	});
});

//PROMISE -  padrão de projeto promise. alternativa ao callback hell.  Uma	 Promise	 é	 o	 resultado	 futuro	 de	 uma	 ação;	 e	 quando dizemos	 futuro,	 é	 porque	 pode	 ser	 fruto	 de	 uma	 operação assíncrona.
new	Promise((resolve,	reject)	=>	{});