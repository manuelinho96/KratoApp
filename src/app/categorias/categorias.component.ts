import { Component, OnInit } from '@angular/core';
import { Categoria } from './models/categoria';
import { Observable } from 'rxjs/Observable';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias:Observable<Categoria[]>

  constructor(private categoriaService:CategoriasService) { }

  ngOnInit() {
    this.categorias = this.categoriaService.getCategorias();
  }

}
