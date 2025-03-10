import { Component } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { Iproducto } from '../iproducto';

@Component({
  selector: 'app-buscar-producto',
  standalone: false,
  templateUrl: './buscar-producto.component.html',
  styleUrl: './buscar-producto.component.css'
})
export class BuscarProductoComponent {
  buscador: string = '';
  producto!: Iproducto;

  constructor(private apirestservice: ApiRestService) { }

  buscarProducto(): void {
    if (this.buscador !== '') {
      this.apirestservice.buscarProducto(this.buscador).subscribe((articulo: Iproducto) => {
        this.producto = articulo;
      });
    }
  }
}
