import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { TablaComponent } from './components/tabla/tabla.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar/:texto', component: BuscarComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'agregar/:id', component: AgregarComponent },
  { path: 'tabla', component: TablaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
