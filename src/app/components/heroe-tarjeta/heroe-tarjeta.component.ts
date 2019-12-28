import { Component, OnInit, Input, Output } from '@angular/core';
import { Heroe } from '../../models/heroe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('heroes') heroes: Heroe[];
  @Input('cargando') cargando;
  @Input('estado') estado;
  @Input('termino') termino = '';
  constructor(private ar: ActivatedRoute) {

  }

  ngOnInit() {
  }

}
