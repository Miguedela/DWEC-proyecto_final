import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { ListaPlanetasComponent } from './lista-planetas/lista-planetas.component';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonajesComponent,
    ListaPlanetasComponent,
    BarraBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }