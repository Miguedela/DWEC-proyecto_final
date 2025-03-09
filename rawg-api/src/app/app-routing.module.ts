import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaNombreComponent } from './busqueda-nombre/busqueda-nombre.component';
import { BusquedaPlataformaComponent } from './busqueda-plataforma/busqueda-plataforma.component';
import { HomeComponent } from './home/home.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'nombre', component: BusquedaNombreComponent },
  { path: 'plataforma', component: BusquedaPlataformaComponent },
  { path: '**', component: Pagina404Component }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
