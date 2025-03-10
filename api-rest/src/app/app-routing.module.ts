import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { AnadirProductoComponent } from './anadir-producto/anadir-producto.component';

const routes: Routes = [
  { path: '', component: ListadoProductosComponent },
  { path: 'home', component: ListadoProductosComponent },
  { path: 'buscar', component: BuscarProductoComponent },
  { path: 'eliminar/:id', component: EliminarProductoComponent },
  { path: 'modificar/:id', component: ActualizarProductoComponent },
  { path: 'anadir', component: AnadirProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
