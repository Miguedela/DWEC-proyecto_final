import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private baseUrl = 'https://images-api.nasa.gov/search';

  constructor(private http: HttpClient) { }

  buscar(query: string, mediaType: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('q', query);
    params = params.append('media_type', mediaType);

    return this.http.get(this.baseUrl, { params: params });
  }
}