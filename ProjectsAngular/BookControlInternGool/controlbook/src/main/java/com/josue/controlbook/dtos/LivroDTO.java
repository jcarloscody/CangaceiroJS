package com.josue.controlbook.dtos;

import java.io.Serializable;

import com.josue.controlbook.domain.Categoria;

public class LivroDTO  implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer Id;
	private String nome;
	private String descricaoString;


	public LivroDTO() {
		super();
	}

	public LivroDTO(Categoria obj) {
		super();
		Id = obj.getId();
		this.nome = obj.getNome();
		this.descricaoString = obj.getdescricao();
	}

	public Integer getId() {
		return Id;
	}

	public void setId(Integer id) {
		Id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricaoString() {
		return descricaoString;
	}

	public void setDescricaoString(String descricaoString) {
		this.descricaoString = descricaoString;
	}
}
