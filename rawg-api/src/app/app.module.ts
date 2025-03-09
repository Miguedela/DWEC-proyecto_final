import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RawgApiService } from './rwag-api.service';
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
    FormsModule,
    HttpClientModule
  ],
  providers: [RawgApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }