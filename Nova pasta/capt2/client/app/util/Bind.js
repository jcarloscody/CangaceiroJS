class Bind {
    constructor(model,	view,	props)	{
        const	proxy	=	ProxyFactory.create(model,	props,	model	=>	{ 
            view.update(model)
        });
        view.update(model);

        return	proxy;//Em JavaScript,	um		constructor()		pode	retornar	um	objeto	de	um tipo	diferente	da	classe	à	qual	pertence:
    }
}