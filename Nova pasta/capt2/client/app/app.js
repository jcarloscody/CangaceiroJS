//será o "main" o ponto de entrada da aplicacao, isto é, aquele que faz a inicializacao de todos os obj necessarios para nossa aplicacao

//criou	a	instância	do	controller
const controller = new NegociacaoController();

//associa o evento de submissão do formulário à chamada do método "adiciona"
/*document
    .querySelector('.form')
    .addEventListener('submit',	function(event) { 
        controller.adiciona(event);
    });*/

const	$	=	document.querySelector.bind(document);

//A	função addEventListener espera	receber	dois	parâmetros.	O	primeiro	é o nome	do	evento	que	estamos	tratando	e	o	segundo	a	função	que desejamos	 chamar.
$(".form").addEventListener("submit", controller.adiciona.bind(controller)); //

$("#botao-apaga").addEventListener("click", controller.apaga.bind(controller));

$('#botao-importa').addEventListener('click',	controller.importaNegociacoes.bind(controller));

