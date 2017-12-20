import { Component, OnInit, Input } from '@angular/core';
import { Comercio } from './models/comercio'
import { ComercioService } from '../services/comercio.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-comercio-list',
  templateUrl: './comercio-list.component.html',
  styleUrls: ['./comercio-list.component.css']
})
export class ComercioListComponent implements OnInit {

  @Input() comercios:Observable<Comercio[]>;

  constructor() { }

  ngOnInit() {
  }

}
