import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComercioService } from '../services/comercio.service';
import { Comercio } from '../comercio-list/models/comercio';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-comercio-detail',
  templateUrl: './comercio-detail.component.html',
  styleUrls: ['./comercio-detail.component.css']
})
export class ComercioDetailComponent implements OnInit, OnDestroy {

  private comercio:Comercio;
  private nombre: string;
  private sub:any;

  constructor(private route: ActivatedRoute, private comercioService: ComercioService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.comercioService.getComerciobynombre(params['nombre']).subscribe(data => {
        console.log(data);
        this.comercio = data;
      });
    });
  }

  ngOnDestroy(){

    this.sub.unsubscribe();

  }

}
