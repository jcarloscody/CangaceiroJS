import { Router } from '@angular/router';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: "",
    descricao: ""
  }

  constructor(private serviceCategoria: CategoriaService, private router: Router) { }

  ngOnInit(): void {
 
  }

  create(): void {
    this.serviceCategoria.create(this.categoria).subscribe((resposta)=>{
      this.serviceCategoria.mensagem("Categoria Inserida com Sucesso!");
      this.router.navigate(["/categorias"]);
    }, erro => {
      //let erros: string = '';
      console.warn("ERRO")
      for (let i=0; i<erro.error.errors.length; i++) {
        this.serviceCategoria.mensagem(`\n Coluna: ${erro.error.errors[i].fildName}  Mensagem: ${erro.error.errors[i].message} \n`)
        //erros += `\n Coluna: ${erro.error.errors[i].fildName}  Mensagem: ${erro.error.errors[i].message} \n`;
      }
      //this.serviceCategoria.mensagem(erros);
    })
  }

}
