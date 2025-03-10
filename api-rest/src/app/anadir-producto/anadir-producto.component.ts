import { Component } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { Iproducto } from '../iproducto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anadir-producto',
  standalone: false,
  templateUrl: './anadir-producto.component.html',
  styleUrl: './anadir-producto.component.css'
})
export class AnadirProductoComponent {
  descripcion!: string;
  precio!: number;

  constructor(
    private apirestservice: ApiRestService,
    private router: Router
  ) { }

  redirigir() {
    this.router.navigate(['/home']);
  }

  anadirProducto(): void {
    if (this.descripcion !== '') {
      const nuevoProducto: Iproducto = {
        descripcion: this.descripcion,
        precio: this.precio
      };

      this.apirestservice.anadirProducto(nuevoProducto).subscribe(
        response => {
          console.log('Artículo creado:', response);
          this.redirigir();
        }
      );
    }
  }
}
