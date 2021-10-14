/*
No	modelo	MVC,	o		Controller		faz	a	ponte	de	ligação	entre
as	ações	do	usuário	na		View		com	o		Model	.	Na	 	View	,	temos
nosso	 	client/index.html		 (ainda	 nos	 aprofundaremos),	 e	 no
Model		temos	instâncias	de		Negociacao	*/

class NegociacaoController {
    #inputData;
    #inputQuantidade;
    #inputValor;
    #negociacoes;
    #negociacoesView;
    #mensagem;
    #mensagemView;

    constructor(){
        //	buscando	os	elementos
        const $ = document.querySelector.bind(document); //.bind ::: //	realizando	o	bind,	$	mantém	document	como	seu	contexto this
        this.#inputData = $('#data');
        this.#inputQuantidade = $('#quantidade');
        this.#inputValor = $('#valor');
        
        this.#negociacoes = new Negociacoes();
        this.#negociacoesView	=	new	NegociacoesView("#negociacoes");
        this.#negociacoesView.update(this.#negociacoes);

        this.#mensagem = new Mensagem();
        this.#mensagemView	=	new	MensagemView('#mensagemView');
        this.#mensagemView.update(this.#mensagem);
    }
    

    adiciona(event)	{
        //cancelando a submissão	do	formulário
        event.preventDefault();
        this.#negociacoes.adiciona(this.#criaNegociacao());
        this.#mensagem.texto = 'Negociação	adicionada	com	sucesso';
        this.#negociacoesView.update(this.#negociacoes);
        this.#mensagemView.update(this.#mensagem);
        this.#limpaFormulario();
        //console.log(this.#negociacoes.Tnegociaoes);
        //console.log(this.#negociacoes.Tnegociaoes[0].Quantidade)
    }

    #limpaFormulario()	{
        this.#inputData.value	=	'';
        this.#inputQuantidade.value	=	1;
        this.#inputValor.value	=	0.0
        this.#inputData.focus();
    }

    #criaNegociacao(){
        //var data = new Date(...this.#inputData.value.split('-').map((item, indice)=>{return item - indice%2; }))
        
        let data = DateConverter.paraData(this.#inputData.value);
        return	new	Negociacao(data, parseInt(this.#inputQuantidade.value), parseFloat(this.#inputValor.value));
         
    }
}