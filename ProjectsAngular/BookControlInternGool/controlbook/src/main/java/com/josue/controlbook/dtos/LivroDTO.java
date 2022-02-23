package com.josue.controlbook.dtos;

import java.io.Serializable;

import com.josue.controlbook.domain.Livro;

public class LivroDTO  implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer id;
	private String titulo;


	public LivroDTO() {
		super();
	}

	public LivroDTO(Livro obj) {
		super();
		id = obj.getId();
		titulo = obj.getTitulo();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}


}
