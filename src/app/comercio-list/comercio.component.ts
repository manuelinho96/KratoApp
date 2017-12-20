import { Component, OnInit, Input } from '@angular/core';
import { Comercio } from './models/comercio';

@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.css']
})
export class ComercioComponent implements OnInit {

  @Input() comercio:Comercio;

  constructor() { }

  ngOnInit() {
  }

}
