import { Component } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { Iproducto } from '../iproducto';

@Component({
  selector: 'app-listado-productos',
  standalone: false,
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  productos: Iproducto[] = [];

  constructor(private apirestservice: ApiRestService) { }

  ngOnInit(): void {
    this.apirestservice.devolverProductos().subscribe(data =>
      this.productos = data
    );
  }
}
