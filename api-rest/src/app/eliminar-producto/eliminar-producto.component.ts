import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-eliminar-producto',
  standalone: false,
  templateUrl: './eliminar-producto.component.html',
  styleUrl: './eliminar-producto.component.css'
})
export class EliminarProductoComponent implements OnInit {
  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private apirestservice: ApiRestService,
    private router: Router
  ) { }

  redirigir() {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.apirestservice.eliminarProducto(this.id).subscribe(() => {
        console.log(`Producto con ID ${this.id} eliminado`);
        this.redirigir();
      });
    });
  }
}