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
    #service;

    constructor() {
        //	buscando	os	elementos
        const $ = document.querySelector.bind(document); //.bind ::: //	realizando	o	bind,	$	mantém	document	como	seu	contexto this
        this.#inputData = $("#data");
        this.#inputQuantidade = $("#quantidade");
        this.#inputValor = $("#valor");

        this.#negociacoes = new Negociacoes();
        this.#negociacoesView = new NegociacoesView("#negociacoes");
        this.#negociacoesView.update(this.#negociacoes);

        this.#mensagem = new Mensagem();
        this.#mensagemView = new MensagemView("#mensagemView");
        this.#mensagemView.update(this.#mensagem);

        this.#service = new NegociacaoService();
    }

    adiciona(event) {
        try {
            //cancelando a submissão	do	formulário
            event.preventDefault();
            this.#negociacoes.adiciona(this.#criaNegociacao());
            this.#mensagem.texto = "Negociação	adicionada	com	sucesso";
            this.#negociacoesView.update(this.#negociacoes);
            this.#mensagemView.update(this.#mensagem);
            this.#limpaFormulario();
            //console.log(this.#negociacoes.Tnegociaoes);
            //console.log(this.#negociacoes.Tnegociaoes[0].Quantidade)
        } catch(err)	{
            if(err	instanceof	DataInvalidaException)	{
                this.#mensagem.texto	=	err.message;
                this.#mensagemView.update(this.#mensagem);
                console.log(err.stack)
            } else {
                this.#mensagem.texto	=	'Um	erro	não	esperado	aconteceu. Entre	em	contato	com	o	suporte';
                this.#mensagemView.update(this.#mensagem);
            }
        }
    }

    #limpaFormulario() {
        this.#inputData.value = "";
        this.#inputQuantidade.value = 1;
        this.#inputValor.value = 0.0;
        this.#inputData.focus();
    }

    #criaNegociacao() {
        //var data = new Date(...this.#inputData.value.split('-').map((item, indice)=>{return item - indice%2; }))

        let data = DateConverter.paraData(this.#inputData.value);
        return new Negociacao(
            data,
            parseInt(this.#inputQuantidade.value),
            parseFloat(this.#inputValor.value)
        );
    }

    apaga() {
        this.#negociacoes.esvazia();
        this.#negociacoesView.update(this.#negociacoes);
        this.#mensagem.texto = "Negociações	apagadas	com	sucesso";
        this.#mensagemView.update(this.#mensagem);
    }

    importaNegociacoes() {
        //RECEBE	UM	ARRAY	DE	PROMISES
        Promise.all([
            this.#service.obterNegociacoesDaSemana(),
            this.#service.obtemNegociacoesDaSemanaAnterior(),
            this.#service.obtemNegociacoesDaSemanaRetrasada()
        ])
        .then(periodo	=>	console.log(periodo))
        .catch(err	=>	this._mensagem.texto		=	err);

        
        
        /*const	negociacoes	=	[];

        this.#service
            .obterNegociacoesDaSemana()
            .then(semana	=>	{ 
                negociacoes.push(...semana);
                return this.#service.obtemNegociacoesDaSemanaAnterior()
            })
            .then(anterior	=>	{ 
                negociacoes.push(...anterior);
                return this.#service.obtemNegociacoesDaSemanaRetrasada()
            })	
            .then(retrasada	=>	{
                negociacoes.push(...retrasada);
                negociacoes.forEach(negociacao	=>	this.#negociacoes.adiciona(negociacao));
                this.#mensagem.texto	=	'Negociações	importadas	com	sucesso';
                this.#mensagemView.update(this.#mensagem)
            })
            .catch(err	=>	this.#mensagem.texto = err);

            console.log(negociacoes)
    
        
        
        /*const	promise	=	this.#service.obterNegociacoesDaSemana();//Métodos	 que	 retornam	 uma	Promise	não precisam	receber	um	callback,	evitando	poluir	sua	interface	de	uso. A	função		then()		evita	a	condição		if		para	tratar	o	sucesso	ou fracasso,	pois	trata	ambos	separadamente	nas	funções	de	callback que	 recebe.	 A	 primeira	 função	 é	 para	 obtermos	 o	 resultado	 da operação	e,	a	segunda,	erros	que	possam	acontecer	e	que	impedem que	a	operação	seja	concluída.
        promise.then( //A	 função	 	then()	 	 recebe	 duas	 funções	 (callbacks)	 como parâmetros.	 A	 primeira	 função	 nos	 dá	 acesso	 ao	 retorno	 da operação	 assíncrona,	 já	 o	 segundo	 a	 possíveis	 erros	 que	 possam ocorrer	durante	a	operação.	Alterando	nosso	código:
            negociacoes	=>	{
                negociacoes.forEach(negociacao	=>	this.#negociacoes.adiciona(negociacao));
                this.#mensagem.texto	=	'Negociações	importadas	com	sucesso';
                this.#mensagemView.update(this.#mensagem);
                
            }, err =>{  this.#mensagemView.update(this.#mensagem = err )});
            console.log(this.#negociacoes)
       /* this.#service.obterNegociacoesDaSemana((err, negociacoes) => {//A	função	que	passamos	 é	um	 callback	(uma	função	que	 será chamada	 posteriormente),	 e	 ela	 segue	 o	 padrão	 Error-FirstCallback.	Essa	abordagem	é	muito	comum	quando	queremos	lidar com	código	assíncrono.	Caso	a	função	que	recebeu	o	callback	nãoconsiga	executar	sua	operação,	no	primeiro	parâmetro	da	callback recebemos	um	erro	e,	no	segundo,		null	. Caso	 a	 função	 que	 recebeu	 o	 callback	 consiga	 executar	 sua operação,	no	primeiro	parâmetro	do	callback	receberemos		null e,	no	segundo,	os	dados	resultantes	da	operação	(em	nosso	caso,	a lista	 de	 negociações).	
            if(err)	{
                this.#mensagem.texto	=	'Não	foi	possível	obter	nas	negociações	da	semana';
                this.#mensagemView.update(this.#mensagem);
                return;
            }
            negociacoes.forEach(negociacao	=> this.#negociacoes.adiciona(negociacao));//lança para a classe negociacoes cada instancia de negociacao
            this.#mensagem.texto	=	'Negociações	importadas	com	sucesso';
            this.#mensagemView.update(this.#mensagem);
        });*/
    }
}