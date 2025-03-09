import { Component } from '@angular/core';
import { RawgApiService } from '../rwag-api.service';
import { Ijuegos } from '../ijuegos';

@Component({
  selector: 'app-busqueda-plataforma',
  standalone: false,
  templateUrl: './busqueda-nombre.component.html',
  styleUrl: './busqueda-nombre.component.css'
})
export class BusquedaNombreComponent {
  title = 'Búsqueda por nombre';
  buscador: string = '';
  juegos: Ijuegos = { juegos: [], posterior: null, anterior: null };
  orden: string = '-rating';
  paginaActual: number = 1;

  constructor(private rawgApiService: RawgApiService) { }

  busquedaNombre() {
    this.rawgApiService.busquedaNombre(this.buscador, this.orden, this.paginaActual).subscribe((response: Ijuegos) => {
      this.juegos = response;
    });
  }

  ordenarJuegos() {
    this.paginaActual = 1;
    this.busquedaNombre();
  }

  getNextPage() {
    if (this.juegos.posterior) {
      this.paginaActual++;
      this.rawgApiService.getGamesByUrl(this.juegos.posterior).subscribe(response => {
        this.juegos = response;
      });
    }
  }

  getPrevPage() {
    if (this.juegos.anterior) {
      this.paginaActual--;
      this.rawgApiService.getGamesByUrl(this.juegos.anterior).subscribe(response => {
        this.juegos = response;
      });
    }
  }
}