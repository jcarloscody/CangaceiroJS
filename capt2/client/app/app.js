//será o "main" o ponto de entrada da aplicacao, isto é, aquele que faz a inicializacao de todos os obj necessarios para nossa aplicacao


//criou	a	instância	do	controller
const controller = new NegociacaoController();



//associa o evento de submissão do formulário à chamada do método "adiciona"
/*document
    .querySelector('.form')
    .addEventListener('submit',	function(event) { 
        controller.adiciona(event);
    });*/



    //A	função addEventListener espera	receber	dois	parâmetros.	O	primeiro	é o nome	do	evento	que	estamos	tratando	e	o	segundo	a	função	que desejamos	 chamar.	
    document
        .querySelector('.form')
        .addEventListener('submit',	controller.adiciona.bind(controller));//

