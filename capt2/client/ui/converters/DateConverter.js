class DateConverter {
    //classes	que	não	definem	um		constructor		 ganham	 um padrão. mas aqui vamos definir um construtor com outra finalidade, veja:
    
    constructor() {//toda vez que o dev tentar instanciar a classe, será lançada essa exceção
        throw new Error('Esta	classe	não	pode	ser	instanciada');
    }


    static paraTexto(data) { //Quando	 temos	 métodos	 que	 não	 fazem	 sentido	 serem chamados	 de	 uma	 instância,	 como	 no	 caso	 do	 método paraTexto()		que	 criamos,	podemos	 chamá-los	diretamente	da classe	 na	 qual	 foram	 declarados,	 adicionando	 o	 modificador static		antes	do	nome	do	método:
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    }
    static paraData(texto) {
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)){
            throw new Error("o formato de entrada deve ser aaaa-mm-dd.")
        }

        return new Date(...texto.split('-').map((item,indice) => item - indice % 2));
    }
}
