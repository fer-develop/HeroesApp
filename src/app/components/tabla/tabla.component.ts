import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  heroes: any[] = [];
  buscar = '';
  cargada = false;
  constructor(private hs: HeroesService, private route: Router) {
    this.hs.obtenerHeroes().subscribe((resp: any[]) => {
      this.heroes = resp;
      this.cargada = true;
      console.log(this.heroes);
    });
  }

  modificar(id: string) {
    this.route.navigate(['/agregar', id]);
  }
  ngOnInit() {
  }

}
