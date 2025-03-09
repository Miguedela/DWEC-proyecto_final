// filepath: /home/git/DWEC-proyecto_final/rawg-api/src/app/rawg-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RawgApiService {
  private apiUrl = 'https://api.rawg.io/api/games';
  private apiKey = 'e4649c1313244c65a344d3d29d014a76';

  constructor(private http: HttpClient) { }

  busquedaNombre(query: string, ordering: string = '-rating', page: number = 1): Observable<any> {
    let params = new HttpParams().set('key', this.apiKey).set('search', query).set('ordering', ordering).set('page', page.toString());
    return this.http.get<any>(this.apiUrl, { params });
  }

  busquedaPlataforma(query: string, ordering: string = '-rating', page: number = 1): Observable<any> {
    let params = new HttpParams().set('key', this.apiKey).set('platforms', query).set('ordering', ordering).set('page', page.toString());
    return this.http.get<any>(this.apiUrl, { params });
  }

  getGamesByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}