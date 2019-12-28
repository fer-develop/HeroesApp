import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  eliminarHeroe(id: string) {
    Swal.fire({
      title: '¿Esta seguro que desea borrar al heroe?',
      text: 'Se borrara al heroe por completo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrar!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Borrado!',
          'El heroe ha sido borrado',
          'success'
        ),
          this.hs.eliminarHeroe(id).subscribe(resp => {
            for (let i = 0; i < this.heroes.length; ++i) {
              if (this.heroes[i].id === id) {
                this.heroes.splice(i, 1);
              }
            }
          });
      }
    });
  }
}
