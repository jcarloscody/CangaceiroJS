package com.josue.controlbook.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.josue.controlbook.domain.Categoria;
import com.josue.controlbook.dtos.CategoriaDTO;
import com.josue.controlbook.repositories.CategoriaRepository;
import com.josue.controlbook.service.exceptions.ObjectNotFoundException;

@Service
public class CategoriaService {

	@Autowired
	private CategoriaRepository categoriaRepository;

	public Categoria findById(Integer id) {
		Optional<Categoria> obj = this.categoriaRepository.findById(id); // optional pq pode encontrar ou nao
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! Id: " + id + ", Tipo: " + Categoria.class.getName()));
	}

	public List<Categoria> findAll() {
		return categoriaRepository.findAll();
	}

	public Categoria create(Categoria obj) {
		obj.setId(null);

		return categoriaRepository.save(obj);
	}

	public Categoria upDate(Integer id, CategoriaDTO objDTO) {
		Categoria obj = findById(id);
		obj.setdescricao(objDTO.getDescricao());
		obj.setNome(objDTO.getNome());
		return categoriaRepository.save(obj);
	}

	public void delete(Integer id) {
		findById(id);

		categoriaRepository.deleteById(id);
	}
}
