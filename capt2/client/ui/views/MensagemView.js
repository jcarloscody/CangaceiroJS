class	MensagemView extends View{

    constructor(seletor){
        super(seletor)// não é necessário usar o super aqui, usei apenas para exemplificar. o super da acesso a superclasse, deve ser usado se a classe filha tivesse mais parametros que a super class. É	 importante	 que	 a	 chamada	 de	 	super()		 seja	 a	 primeira instrução	 dentro	 do	 	 constructor()	 	 da	 classe	 filha
    }

    template(model)	{
        return	model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
	}

}