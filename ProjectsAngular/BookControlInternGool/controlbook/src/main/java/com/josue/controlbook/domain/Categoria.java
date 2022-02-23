package com.josue.controlbook.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
public class Categoria implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer Id;
	private String nome;
	private String descricaoString;
	
	//proteger contra a serializacao https://stackoverflow.com/questions/47693110/could-not-write-json-infinite-recursion-stackoverflowerror-nested-exception
	@JsonManagedReference
	@OneToMany(mappedBy = "categoria")
	private List<Livro> livros = new ArrayList<>();

	public Categoria() {
		super();
	}

	public Categoria(Integer id, String nome, String descricaoString) {
		super();
		Id = id;
		this.nome = nome;
		this.descricaoString = descricaoString;
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

	public List<Livro> getLivros() {
		return livros;
	}

	public void setLivros(List<Livro> livros) {
		this.livros = livros;
	}

	@Override
	public int hashCode() {
		return Objects.hash(Id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Categoria other = (Categoria) obj;
		return Objects.equals(Id, other.Id);
	}
	
	
	
}
