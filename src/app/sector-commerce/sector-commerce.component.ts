import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComercioService } from '../services/comercio.service';
import { Comercio } from '../comercio-list/models/comercio';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sector-commerce',
  templateUrl: './sector-commerce.component.html',
  styleUrls: ['./sector-commerce.component.css']
})
export class SectorCommerceComponent implements OnInit {

  private comercios:Observable<Comercio[]>;
  private nombre: string;
  private sub:any;

  constructor(private route: ActivatedRoute, private comercioService: ComercioService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.nombre = params['nombre'];
      this.comercios = this.comercioService.getComerciobysector(this.nombre, 'asc');
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  orden(tipodeorden: string){
    this.comercios = this.comercioService.getComerciobysector(this.nombre, tipodeorden);
  }

}
