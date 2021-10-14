class	NegociacoesView	extends View{ 

    template(model)	{//A	 finalidade	 do	 método	 	template		 será	 o	 de	 retornar	 uma string	 com	 a	 apresentação	 HTML	 que	 desejamos	 utilizar	 para representar	 em	 breve	 o	 modelo	 	Negociacoes
        return `
        <table	class="table	table-hover	table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            ${model.Tnegociaoes.map(negociacao	=>	{
                return	`
                    <tr>
                        <td>${DateConverter.paraTexto(negociacao.getDate)}</td>
                        <td>${negociacao.Quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.obtemVolume}</td>
                    </tr>`;
            }).join('')}
            </tbody>
            
            <tfoot>
                <tr>
                    <td	colspan="3">Volume Total</td>
                    <td>${model.volumeTotal}</td>
                </tr>
            </tfoot>
        </table>
        `
    }
}