import { Injectable } from '@angular/core';
import { Comercio } from '../comercio-list/models/comercio'

@Injectable()
export class ComercioService {

  constructor() { }

  comercios: Comercio[] = [
    new Comercio('Locatel', 'Farmacia', 4, 'Farmacia Locatel', '../assets/comercios/locatel.jpg'),
    new Comercio('Excelcior Gama', 'Mercado', 3, 'Mercado EG', '../assets/comercios/eg.jpg'),
    new Comercio('Holic', 'Licoreria', 5, 'Local Holic', '../assets/comercios/holic.png'),
  ]

  getComercio(){
    return this.comercios;
  }

}
