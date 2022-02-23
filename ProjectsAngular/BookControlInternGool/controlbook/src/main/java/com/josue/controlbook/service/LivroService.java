package com.josue.controlbook.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.josue.controlbook.domain.Categoria;
import com.josue.controlbook.domain.Livro;
import com.josue.controlbook.repositories.LivroRepository;
import com.josue.controlbook.service.exceptions.ObjectNotFoundException;

@Service
public class LivroService {

	@Autowired
	private LivroRepository livroRepository;

	@Autowired
	private CategoriaService categoriaService;

	public Livro findById(Integer id) {
		Optional<Livro> obj = this.livroRepository.findById(id); // optional pq pode encontrar ou nao
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! Id: " + id + ", Tipo: " + Livro.class.getName()));
	}

	// retorna todos os livros pela categoria
	public List<Livro> findAll(Integer id_cat) {
		categoriaService.findById(id_cat); // caso não exita retorna uma exceção
		return livroRepository.findAllByIdCategoria(id_cat);
	}

	public Livro upDate(Integer id, Livro obj) {
		Livro newObj = findById(id);
		upDateData(newObj, obj);
		return livroRepository.save(newObj);
	}

	private void upDateData(Livro newObj, Livro obj) {
		newObj.setTitulo(obj.getTitulo());
		newObj.setTexto(obj.getTexto());
		newObj.setNome_autor(obj.getNome_autor());
	}

	public Livro create(Integer cat_id, Livro obj) {
		obj.setId(null);
		Categoria cat = categoriaService.findById(cat_id);
		obj.setCategoria(cat);
		return livroRepository.save(obj);
	}
}
