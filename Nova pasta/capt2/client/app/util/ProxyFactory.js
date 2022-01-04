//A	pasta		util		não	 é	um	 erro	de	digitação.	É	uma	pasta	na	qual ficarão	 os	 arquivos	 que	 não	 fazem	 parte	 do	 domínio	 nem	 da interface	(UI)	da	aplicação.

class	ProxyFactory	{
	static	create(objeto,	props,	armadilha)	{//três	 parâmetros.	 O	 primeiro	 é	 o objeto	alvo	do	proxy,	o	segundo	é	um	array	com	os	métodos	que desejamos	 interceptar	 e,	 por	 fim,	 o	 último	 é	 a	 função	 armadilha que	 desejamos	 executar	 para	 os	 métodos	 presentes	 no	 array props	

        //	recebe	objeto	como	parâmetro
        return new Proxy(objeto,	{
            get: function (target,	prop,	receiver)	{
                //	usa	o	array	props	para	realizar	o	includes
                if(typeof(target[prop]) == typeof(Function) && props.includes(prop)) {
                    return function() {
                        console.log(`"${prop}" disparou a armadilha`);
                        target[prop].apply(target,	arguments);
                        //	executa	a	armadilha	que	recebe	
                        //	o	objeto	original
                        armadilha(target);
                    }
                } else {
                    return target[prop];
                }
            }
        });
	}
}