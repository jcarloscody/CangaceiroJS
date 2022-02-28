import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'livros', 'acoes'];
  livros: Livro[] = [];

  constructor(private livroService: LivroService, private router: Router) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll (): void {
    this.livroService.findAll().subscribe((livros)=>{
      
      this.livros = livros;
    })
  }

  navegarParaLivroCreate(): void {
    this.router.navigate(["livros/create"]);
  }


}
