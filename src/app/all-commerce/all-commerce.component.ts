import { Component, OnInit } from '@angular/core';
import { Comercio } from '../comercio-list/models/comercio';
import { ComercioService } from '../services/comercio.service';

@Component({
  selector: 'app-all-commerce',
  templateUrl: './all-commerce.component.html',
  styleUrls: ['./all-commerce.component.css']
})
export class AllCommerceComponent implements OnInit {

  comercios:Comercio[] = [];

  constructor(private comercioService:ComercioService) { }

  ngOnInit() {
    this.comercios = this.comercioService.getComercio();
  }

}
