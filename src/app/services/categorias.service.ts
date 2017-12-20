import { Injectable } from '@angular/core';
import { Categoria } from '../categorias/models/categoria'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class CategoriasService {

  constructor(private http:Http) { }

  getCategorias(): Observable<Categoria[]>{
    return this.http.get('http://localhost:3000/categorias').map((response: Response) => response.json());
  }
  
}
