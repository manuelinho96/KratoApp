import { Injectable } from '@angular/core';
import { Comercio } from '../comercio-list/models/comercio'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class ComercioService {

  constructor(private http:Http) { }


  getComercio(): Observable<Comercio[]>{
    return this.http.get('http://localhost:3000/comercios').map((response: Response) => response.json());
  }

  getComerciobynombre(nombre:string): Observable<Comercio>{
    return this.getComercio().map(comercios => comercios.find(comercio => comercio.nombre == nombre));
  }

}