import { Component } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { Iproducto } from '../iproducto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-producto',
  standalone: false,
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent {
  id: string = '';
  producto!: Iproducto;

  constructor(
    private route: ActivatedRoute,
    private apirestservice: ApiRestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.apirestservice.buscarProducto(this.id).subscribe((articulo: Iproducto) => {
        this.producto = articulo;
      });
    });
  }

  redirigir() {
    this.router.navigate(['/home']);
  }

  modificarProducto(): void {
    const producto: Iproducto = {
      descripcion: this.producto.descripcion,
      precio: this.producto.precio
    };

    this.producto = producto;

    this.apirestservice.actualizarProducto(this.id, producto).subscribe(
      response => {
        console.log('Artículo actualizado:', response);
        this.redirigir();
      },
      error => {
        console.error("Error al actualizar el producto", error);
      }
    );
  }
}