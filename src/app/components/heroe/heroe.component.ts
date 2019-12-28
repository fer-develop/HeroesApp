import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;
  constructor(private ar: ActivatedRoute, private es: HeroesService) { }

  ngOnInit() {
    this.ar.params.subscribe(params => {
      this.heroe = this.es.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

}
