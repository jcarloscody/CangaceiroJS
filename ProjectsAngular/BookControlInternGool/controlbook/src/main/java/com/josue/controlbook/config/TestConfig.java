package com.josue.controlbook.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.josue.controlbook.service.DBService;

@Configuration
@Profile("test")
public class TestConfig {

	@Autowired
	private DBService dbService;
	
	@Bean   //queremos que este metodo suba sempre q o perfil test esteja ativo. então quando startamos o properties chama o TestConfig, depois chama este metodo devido a anotacao bean e chama o service  
	public void instanciaBandoDeDados() {
		this.dbService.instanciaBancoDeDados();
	}
}
