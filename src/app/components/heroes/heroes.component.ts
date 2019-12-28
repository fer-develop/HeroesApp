import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];
  cargando: boolean;
  constructor(private hs: HeroesService) {
    this.cargando = true;
  }

  ngOnInit() {

    setTimeout(
      () => {
        this.heroes = this.hs.getHeroes();
        this.cargando = false;
      }, 2000);
  }

}
