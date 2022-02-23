package com.josue.controlbook.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.josue.controlbook.domain.Livro;

@Repository
public interface LivroRepository extends JpaRepository<Livro, Integer> {

}
