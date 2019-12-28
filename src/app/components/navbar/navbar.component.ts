import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  buscarHeroeM(texto: string) {
    if (texto.length < 1) {
      return;
    }
    this.route.navigate(['/buscar', texto]);
  }
}
