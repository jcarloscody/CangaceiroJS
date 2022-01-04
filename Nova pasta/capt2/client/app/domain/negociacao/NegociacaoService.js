class	NegociacaoService	{
    #http;

    constructor()	{
        //	NOVA PROPRIEDADE!
        this.#http = new HttpService();
    }

	obterNegociacoesDaSemana( ){ //cb)	{
        return this.#http
                .get('negociacoes/semana')
                .then( dados	=>	{
                    const	negociacoes	=	dados.map(objeto	=>	new	Negociacao(new Date(objeto.data),	objeto.quantidade,	objeto.valor));
                    //	ATENÇÃO	AQUI!		
                    return	negociacoes;
                },  err	=>	{
                    //	ATENÇÃO	AQUI!
                    throw new Error('Não	foi	possível	obter	as	negociações');
                } );
    

        /*return new Promise((resolve,	reject)	=>	{
            const	xhr	=	new	XMLHttpRequest();//um	 objeto	 do	mundo	JavaScript	 capaz	 de realizar	requisições:
            xhr.open('GET',	'negociacoes/semana'); // vamos	solicitar	 à	instância	que abra	uma	conexão	com	o	servidor	para	nós: O	método		open()		 recebeu	dois	parâmetros:	o	primeiro	 é	o tipo	de	requisição	a	ser	realizada	(	GET	),	o	segundo	é	o	endereço do	servidor.	Se	trabalhássemos	com	outro	endereço	do	serviço	na Web,	seria	necessário	utilizar	o	endereço	completo.	Como	estamos trabalhando	localmente,	só	usamos		negociacoes/semana	
            xhr.onreadystatechange=()=>{//Será	 preciso	 realizar algumas	configurações	antes	do	envio. //	realizaremos	nossas	configurações	aqui
                
                if(xhr.readyState	==	4)	{//estados das requisições ajax ou xmlhttprequest::: 0:	requisição	ainda	não	iniciada; 1:	conexão	com	o	servidor	estabelecida; 2:	requisição	recebida; 3:	processando	requisição; 4:	requisição	está	concluída	e	a	resposta	está	pronta.
                    if(xhr.status	==	200)	{//	200	,	 um	 código	 padrão	 que indica	que	a	operação	foi	realizada	com	sucesso:
                        //	converte	cada	objeto	para	uma	instância	de	Negociacao
                        console.log(JSON.parse(xhr.responseText));
                        const negociacoes = JSON.parse(xhr.responseText)//responseText- retorna em string. -> Jsonparse- converte para json
                                            .map(objeto	=>	new Negociacao(new Date(objeto.data),	objeto.quantidade,	objeto.valor))//instancia em negociacao cada indice
                        console.log('Obtendo	as	negociações	do	servidor.');

                        //	CHAMOU	RESOLVE
			            resolve(negociacoes);
                    } else	{
                        //	CHAMOU	REJECT
	                    reject('Não	foi	possível	obter	nas	negociações');
                    }
                };
            
            }

            xhr.send();	//	executa	a	requisição	configurada
        });	*/
        
        /*const	xhr	=	new	XMLHttpRequest();//um	 objeto	 do	mundo	JavaScript	 capaz	 de realizar	requisições:
        xhr.open('GET',	'negociacoes/semana'); // vamos	solicitar	 à	instância	que abra	uma	conexão	com	o	servidor	para	nós: O	método		open()		 recebeu	dois	parâmetros:	o	primeiro	 é	o tipo	de	requisição	a	ser	realizada	(	GET	),	o	segundo	é	o	endereço do	servidor.	Se	trabalhássemos	com	outro	endereço	do	serviço	na Web,	seria	necessário	utilizar	o	endereço	completo.	Como	estamos trabalhando	localmente,	só	usamos		negociacoes/semana	
        xhr.onreadystatechange=()=>{//Será	 preciso	 realizar algumas	configurações	antes	do	envio. //	realizaremos	nossas	configurações	aqui
            
            if(xhr.readyState	==	4)	{//estados das requisições ajax ou xmlhttprequest::: 0:	requisição	ainda	não	iniciada; 1:	conexão	com	o	servidor	estabelecida; 2:	requisição	recebida; 3:	processando	requisição; 4:	requisição	está	concluída	e	a	resposta	está	pronta.
                if(xhr.status	==	200)	{//	200	,	 um	 código	 padrão	 que indica	que	a	operação	foi	realizada	com	sucesso:
                    //	converte	cada	objeto	para	uma	instância	de	Negociacao
                    console.log(JSON.parse(xhr.responseText));
                    const negociacoes = JSON.parse(xhr.responseText)//responseText- retorna em string. -> Jsonparse- converte para json
                                        .map(objeto	=>	new Negociacao(new Date(objeto.data),	objeto.quantidade,	objeto.valor))//instancia em negociacao cada indice
                    console.log('Obtendo	as	negociações	do	servidor.');

                    //	OPERAÇÃO	CONCLUÍDA,	SEM	ERRO
	                cb(null,	negociacoes);
                } else	{
                    console.log(xhr.responseText);
                    //	ERRO	NA	OPERAÇÃO!
	                cb('Não	foi	possível	obter	nas	negociações	da	semana',	null);
                }
            };
        
        }	
        xhr.send();	//	executa	a	requisição	configurada*/
	}



    obtemNegociacoesDaSemanaAnterior()	{
        return this.#http
            .get('negociacoes/anterior')
            .then( dados	=>	{
                const	negociacoes	=	dados.map(objeto	=>	
                new	Negociacao(new Date(objeto.data),	objeto.
                quantidade,	objeto.valor));
                return	negociacoes;
            }, err	=>	{
                //	ATENÇÃO	AQUI!
                throw new Error('Não	foi	possível	obter	as	negociações	da	semana	anterior');
            });
    }
    
    

    obtemNegociacoesDaSemanaRetrasada()	{
        return this.#http
            .get('negociacoes/retrasada')
            .then( dados	=>	{
                const	negociacoes	=	dados.map(objeto	=>	new	Negociacao(new Date(objeto.data),	objeto.quantidade,	objeto.valor));
                return	negociacoes;
            }, err	=>	{
                throw new Error('Não	foi	possível	obter	as	negociações	da	semana	retrasada');
            }
            );
    }
}   