import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BusquedaNombreComponent } from './busqueda-nombre/busqueda-nombre.component';
import { BusquedaPlataformaComponent } from './busqueda-plataforma/busqueda-plataforma.component';
import { HomeComponent } from './home/home.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { FormatearFechaPipe } from './formatear-fecha.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaNombreComponent,
    BusquedaPlataformaComponent,
    HomeComponent,
    Pagina404Component,
    AcercaDeComponent,
    FormatearFechaPipe
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