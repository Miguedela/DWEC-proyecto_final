import { Component } from '@angular/core';
import { DragonBallService } from '../dragon-ball.service';

@Component({
  selector: 'app-barra-busqueda',
  standalone: false,
  templateUrl: './barra-busqueda.component.html',
  styleUrl: './barra-busqueda.component.css'
})
export class BarraBusquedaComponent {
  query: string = '';

  constructor(private dragonBallService: DragonBallService) { }

  buscar(): void {
    if (this.query.trim()) {
      this.dragonBallService.buscarPersonajes(this.query).subscribe(data => {
        console.log('Resultados de búsqueda:', data);
        // Aquí puedes manejar los resultados de la búsqueda, por ejemplo, actualizando una lista de personajes
      });
    }
  }
}
