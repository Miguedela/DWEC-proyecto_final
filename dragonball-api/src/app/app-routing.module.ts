import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { ListaPlanetasComponent } from './lista-planetas/lista-planetas.component';

const routes: Routes = [
  { path: '', redirectTo: '/personajes', pathMatch: 'full' },
  { path: 'personajes', component: ListaPersonajesComponent },
  { path: 'planetas', component: ListaPlanetasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }