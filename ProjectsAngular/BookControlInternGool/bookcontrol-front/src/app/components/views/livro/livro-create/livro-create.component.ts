import { Router, ActivatedRoute } from '@angular/router';
import { LivroService } from './../livro.service';
import { Livro } from './../livro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  livro: Livro = {
    id : "",
    titulo: "",
    nome_autor: "",
    texto: ""
  }

  constructor(private serviceLivro: LivroService, private router: Router, private routerActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.livro.id = this.routerActive.snapshot.paramMap.get("id")!;
  }

  create(): void {
    this.serviceLivro.create(this.livro, this.livro.id!).subscribe((resposta)=>{
      this.serviceLivro.mensagem("Livro Inserido com Sucesso!");
      this.router.navigate(["/livros"]);
    }, erro => {
      console.warn(erro)
      if (erro.error.errors){
        for (let i=0; i<erro.error.errors.length; i++) {
          this.serviceLivro.mensagem(`\n Coluna: ${erro.error.errors[i].fildName}  Mensagem: ${erro.error.errors[i].message} \n`)
        }
      } else {
        this.serviceLivro.mensagem(` ${erro.error.error} `)
      }
    })
  }

  cancel (): void{
    this.router.navigate(["/livros"]);
  }

}
