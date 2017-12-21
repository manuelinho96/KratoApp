import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComercioService } from '../services/comercio.service';
import { Comercio } from '../comercio-list/models/comercio';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private comerciosnombre:Observable<Comercio[]>
  private comerciosdescription:Observable<Comercio[]>
  private nombre: string;
  private sub:any;

  constructor(private route: ActivatedRoute, private comercioService: ComercioService, private _location: Location) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.nombre = params['param'];
      this.comerciosnombre = this.comercioService.getComerciobyname(this.nombre.toLocaleLowerCase());
      this.comerciosdescription = this.comercioService.getComerciobydescription(this.nombre.toLocaleLowerCase());
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  ClickBack(){
    this._location.back();
  }

}
