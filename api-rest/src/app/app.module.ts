import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';
import { AnadirProductoComponent } from './anadir-producto/anadir-producto.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoProductosComponent,
    BuscarProductoComponent,
    AnadirProductoComponent,
    ActualizarProductoComponent,
    EliminarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
