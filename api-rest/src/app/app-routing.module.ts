import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';

const routes: Routes = [
  { path: '', component: ListadoProductosComponent },
  { path: 'home', component: ListadoProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
