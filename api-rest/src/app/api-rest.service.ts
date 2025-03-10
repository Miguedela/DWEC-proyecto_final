import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Iproducto } from './iproducto';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  private apiUrl = 'https://apiproyecto016.iesruizgijon.es/api/articulos';

  private descripcion!: string;
  private precio!: number;

  constructor(
    private http: HttpClient,

  ) { }

  // Metodo para devolver todos los productos
  devolverProductos(): Observable<Iproducto[]> {
    return this.http.get<{ articulos: Iproducto[] }>(this.apiUrl).pipe(
      map(response => response.articulos)
    );
  }

  // Metodo para buscar un producto por su id
  buscarProducto(id: string): Observable<Iproducto> {
    return this.http.get<{ articulo: Iproducto }>(this.apiUrl + `/${id}`).pipe(
      map(response => response.articulo)
    );
  }

  // Metodo para eliminar un producto por su id
  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + `/${id}`);
  }

  anadirProducto(producto: Iproducto): Observable<any> {
    const body = new HttpParams().set('json', JSON.stringify(producto));

    return this.http.post(this.apiUrl, body, { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') });
  }

  actualizarProducto(id: string, producto: Iproducto): Observable<any> {
    const body = new HttpParams().set('json', JSON.stringify(producto));
    console.log(producto);

    return this.http.put(this.apiUrl + `/${id}`, body, { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') });
  }
}
