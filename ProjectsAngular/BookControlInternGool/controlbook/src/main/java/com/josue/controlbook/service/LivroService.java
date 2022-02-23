package com.josue.controlbook.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
		Optional<Livro> obj = this.livroRepository.findById(id); //optional pq pode encontrar ou nao
		return obj.orElseThrow(()-> new ObjectNotFoundException("Objeto não encontrado! Id: " + id + ", Tipo: " + Livro.class.getName()));
	}
	
	//retorna todos os livros pela categoria
	public List<Livro> findAll(Integer id_cat){
		categoriaService.findById(id_cat); //caso não exita retorna uma exceção
		return livroRepository.findAllByIdCategoria(id_cat);
	}
	
	/*
	public List<Livro> findAll(){
		return livroRepository.findAll();
	}
	
	public Livro create(Livro obj) {
		obj.setId(null);
		return livroRepository.save(obj);
	}
	
	public Livro upDate(Integer id, LivroDTO objDTO) {
		Livro obj = findById(id);
		obj.setdescricao(objDTO.getDescricaoString());
		obj.setNome(objDTO.getNome());
		return livroRepository.save(obj);
	}


	public void delete(Integer id) {
		findById(id);
		try {
			livroRepository.deleteById(id);
			
		} catch (DataIntegrityViolationException e) {
			throw new DataIntegrityViolationExceptionn("Livro não pode ser deletado pq tem livros associados");
		}
		
	}*/
}
