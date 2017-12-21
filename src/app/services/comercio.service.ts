import { Injectable } from '@angular/core';
import { Comercio } from '../comercio-list/models/comercio'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import 'rxjs/add/operator/map';

@Injectable()
export class ComercioService {


  private nombre: any = [];
  private descripcion: any = [];
  private comercios:Observable<Comercio[]>;
  private apiUrl: string = 'http://localhost:3000/comercios';

  constructor(private http:Http) { }


  getComercio(): Observable<Comercio[]>{
    return this.http.get(this.apiUrl).map((response: Response) => response.json());
  }

  getComerciobynombre(nombre:string): Observable<Comercio>{
    return this.getComercio().map(comercios => comercios.find(comercio => comercio.nombre == nombre));
  }

  getComerciobysector(sector:string, order:string): Observable<Comercio[]>{
    let apiURL = `${this.apiUrl}?_sort=rating&_order=${order},views&sector=${sector}`;
    return this.http.get(apiURL).map((res: Response) => { 
      return res.json().map(item => {
        return new Comercio( 
            item.nombre,
            item.sector,
            item.rating,
            item.description,
            item.logo
        );
      });
    });
  }

  getComerciobynombresearch(nombre:string): Observable<Comercio[]>{
    this.nombre = nombre.toLowerCase();
    let apiURL = `${this.apiUrl}?q=${nombre}`;
    return this.http.get(apiURL).map((res: Response) => { 
      return res.json().map(item => {
        console.log(item.description);
        if(item.nombre.toLowerCase().indexOf(nombre) != -1){
          return new Comercio( 
              item.nombre,
              item.sector,
              item.rating,
              item.description,
              item.logo
          );
        }
      });
    });
  }

  getComerciobydescriptionsearch(descripcion:string): Observable<Comercio[]>{
    this.descripcion = descripcion.toLowerCase();
    let apiURL = `${this.apiUrl}?q=${descripcion}`;
    return this.http.get(apiURL).map((res: Response) => { 
      return res.json().map(item => {
        console.log(item.description);
        if(item.nombre.toLowerCase().indexOf(descripcion) == -1){
          return new Comercio( 
              item.nombre,
              item.sector,
              item.rating,
              item.description,
              item.logo
          );
        }
      });
    });
  }
}