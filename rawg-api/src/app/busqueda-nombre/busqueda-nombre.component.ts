import { Component } from '@angular/core';
import { RawgApiService } from '../rwag-api.service';

@Component({
  selector: 'app-busqueda-plataforma',
  standalone: false,
  templateUrl: './busqueda-nombre.component.html',
  styleUrl: './busqueda-nombre.component.css'
})
export class BusquedaNombreComponent {
  title = 'Búsqueda por nombre';
  buscador: string = '';
  juegos: any[] = [];
  orden: string = '-rating';
  nextPage: string | null = null;
  prevPage: string | null = null;

  constructor(private rawgApiService: RawgApiService) { }

  busquedaNombre() {
    if (this.buscador) {
      this.rawgApiService.busquedaNombre(this.buscador, this.orden).subscribe(response => {
        this.juegos = response.results;
      });
    }
  }

  ordenarJuegos() {
    this.busquedaNombre();
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