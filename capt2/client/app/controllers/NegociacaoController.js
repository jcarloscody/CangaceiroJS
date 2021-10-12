/*
No	modelo	MVC,	o		Controller		faz	a	ponte	de	ligação	entre
as	ações	do	usuário	na		View		com	o		Model	.	Na	 	View	,	temos
nosso	 	client/index.html		 (ainda	 nos	 aprofundaremos),	 e	 no
Model		temos	instâncias	de		Negociacao	*/

class NegociacaoController {
    #inputData;
    #inputQuantidade;
    #inputValor

    constructor(){
        //	buscando	os	elementos
        let $ = document.querySelector.bind(document); //.bind ::: //	realizando	o	bind,	$	mantém	document	como	seu	contexto this
        this.#inputData =  $('#data');
        this.#inputQuantidade	= $('#quantidade');
        this.#inputValor = $('#valor');
    }

    adiciona(event)	{
        //cancelando a submissão	do	formulário
        event.preventDefault();

        let	negociacao	=	new	Negociacao(new Date(this.#inputData.value.split('-')), parseInt(this.#inputQuantidade.value), parseFloat(this.#inputValor.value));
        console.log(negociacao.getDate)
    }
}