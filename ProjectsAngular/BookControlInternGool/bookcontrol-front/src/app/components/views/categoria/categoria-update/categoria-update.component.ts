import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria = {
    nome: "",
    descricao: ""
  }

  constructor(private serviceCategoria: CategoriaService, private routerActivated: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.categoria.id = this.routerActivated.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.serviceCategoria.findById(this.categoria.id!).subscribe(
      resposta => {
        this.categoria = resposta;
        console.warn(this.categoria);
      }
    )
  }




  cancel(): void {
    this.router.navigate(["categorias"])
  }

}
