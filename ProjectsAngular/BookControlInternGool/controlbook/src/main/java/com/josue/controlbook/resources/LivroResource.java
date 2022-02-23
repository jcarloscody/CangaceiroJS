package com.josue.controlbook.resources;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.josue.controlbook.domain.Livro;
import com.josue.controlbook.dtos.LivroDTO;
import com.josue.controlbook.service.LivroService;



@RestController
@RequestMapping(value = "/livros")
public class LivroResource {
	
	@Autowired
	private LivroService livroService;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Livro> findById(@PathVariable Integer id){
		Livro obj = this.livroService.findById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@GetMapping //8080/livros?categoria=1  listar todos os livros de uma determinada categoria
	public ResponseEntity<List<LivroDTO>> findAll(@RequestParam(value = "categoria", defaultValue = "0") Integer id_cat){
		List<Livro> list = livroService.findAll(id_cat);
		List<LivroDTO> listDTO = list.stream().map((obj)-> new LivroDTO(obj)).collect(Collectors.toList());
		return ResponseEntity.ok().body(listDTO);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<Livro> upDate(@PathVariable Integer id, @RequestBody Livro obj){
		Livro newObj = livroService.upDate(id, obj);
		return ResponseEntity.ok().body(newObj);
	}
	
	@PatchMapping(value = "/{id}")
	public ResponseEntity<Livro> upDatePatch(@PathVariable Integer id, @RequestBody Livro obj){
		Livro newObj = livroService.upDate(id, obj);
		return ResponseEntity.ok().body(newObj);
	}
	
	/*
	@GetMapping
	public ResponseEntity<List<CategoriaDTO>> findAll(){
		List<Categoria> listCategorias = categoriaService.findAll();
		List<CategoriaDTO> categoriaDTOs = listCategorias.stream().map((obj) -> new CategoriaDTO(obj)).toList();
		return ResponseEntity.ok().body(categoriaDTOs);
	}
	
	@PostMapping
	public ResponseEntity<Categoria> create(@RequestBody Categoria obj){
		Categoria post = categoriaService.create(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(post.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<CategoriaDTO> upDate(@PathVariable Integer id, @RequestBody CategoriaDTO objDTO){
		Categoria newObj = categoriaService.upDate(id, objDTO);
		return ResponseEntity.ok().body(new CategoriaDTO(newObj));
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Integer id){
		categoriaService.delete(id);
		return ResponseEntity.noContent().build();
	}*/
}


