import { Component } from '@angular/core';
import { RawgApiService } from '../rwag-api.service';

@Component({
  selector: 'app-busqueda-plataforma',
  standalone: false,
  templateUrl: './busqueda-plataforma.component.html',
  styleUrl: './busqueda-plataforma.component.css'
})
export class BusquedaPlataformaComponent {
  title = 'Búsqueda por plataforma';
  juegos: any[] = [];
  buscador: string = '';
  orden: string = '-rating'; // Valoración descendente por defecto
  nextPage: string | null = null;
  prevPage: string | null = null;

  constructor(private rawgApiService: RawgApiService) { }

  busquedaPlataforma() {
    if (this.buscador) {
      this.rawgApiService.busquedaPlataforma(this.buscador, this.orden).subscribe(response => {
        this.juegos = response.results;
        this.nextPage = response.next;
        this.prevPage = response.previous;
      });
    }
  }

  ordenarJuegos() {
    this.busquedaPlataforma();
  }

  getNextPage() {
    if (this.nextPage) {
      this.rawgApiService.getGamesByUrl(this.nextPage).subscribe(response => {
        this.juegos = response.results;
        this.nextPage = response.next;
        this.prevPage = response.previous;
      });
    }
  }

  getPrevPage() {
    if (this.prevPage) {
      this.rawgApiService.getGamesByUrl(this.prevPage).subscribe(response => {
        this.juegos = response.results;
        this.nextPage = response.next;
        this.prevPage = response.previous;
      });
    }
  }
}
