import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private ar: ActivatedRoute, private hs: HeroesService) {
    this.ar.params.subscribe(params => { this.termino = params['texto'] });
  }

  ngOnInit() {
    this.ar.params.subscribe(params => {
      this.heroes = this.hs.buscarHeroes(params['texto']);
      this.termino = params['texto'];
      if (this.heroes.length < 1) {
        this.heroes = [];
      }
    });
  }

}
