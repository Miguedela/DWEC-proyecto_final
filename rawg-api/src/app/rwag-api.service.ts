import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Ijuegos } from './ijuegos';

@Injectable({
  providedIn: 'root'
})
export class RawgApiService {
  private apiUrl = 'https://api.rawg.io/api/games';
  private apiKey = 'e4649c1313244c65a344d3d29d014a76';

  constructor(private http: HttpClient) { }

  busquedaNombre(nombre: string, orden: string, pagina: number = 1): Observable<Ijuegos> {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('search', nombre)
      .set('ordering', orden)
      .set('page', pagina.toString());

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(respuesta => ({
        juegos: respuesta.results.map((juego: any) => ({
          nombre: juego.name,
          valoracion: juego.rating,
          fechaLanzamiento: juego.released,
          imagen: juego.background_image
        })),
        posterior: respuesta.next,
        anterior: respuesta.previous
      }))
    );
  }

  busquedaPlataforma(plataforma: string, orden: string, pagina: number): Observable<Ijuegos> {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('platforms', plataforma)
      .set('ordering', orden)
      .set('page', pagina.toString());

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(respuesta => ({
        juegos: respuesta.results.map((juego: any) => ({
          nombre: juego.name,
          valoracion: juego.rating,
          fechaLanzamiento: juego.released,
          imagen: juego.background_image
        })),
        posterior: respuesta.next,
        anterior: respuesta.previous
      }))
    );
  }

  getGamesByUrl(url: string): Observable<Ijuegos> {
    return this.http.get<any>(url).pipe(
      map(respuesta => ({
        juegos: respuesta.results.map((juego: any) => ({
          nombre: juego.name,
          valoracion: juego.rating,
          fechaLanzamiento: juego.released,
          imagen: juego.background_image
        })),
        posterior: respuesta.next,
        anterior: respuesta.previous
      }))
    );
  }
}