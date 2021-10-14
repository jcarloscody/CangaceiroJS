class View {
    #elemento;
    constructor(seletor) {
        this.#elemento	=	document.querySelector(seletor);
    }

    update(model) {
        this.#elemento.innerHTML = this.template(model);
    }

    template(model)	{//Na	 programação	 orientada	 a	 objetos,	 existe	 o	 conceito	 de classes	 abstratas.	 Essas	 classes	 podem	 ter	 um	 ou	 mais	 métodos abstratos,	 que	 nada	 mais	 são	 do	 que	 métodos	 que	 não	 possuem implementação,	 apenas	 a	 assinatura	 que	 consiste	 no	 nome	 do método	e	o	parâmetro	que	recebe. No	 JavaScript,	 não	 há	 classes	 abstratas,	 mas	 podemos	 tentar emulá-las	da	seguinte	maneira.  vamos	 adicionar	 o	 método	 	template()	, cuja	implementação	consiste	no	lançamento	de	uma	exceção:
        throw new Error('Você	precisa	implementar	o	método	template')
    }

}