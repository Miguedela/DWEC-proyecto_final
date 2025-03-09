import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  private apiUrl = 'https://api.rawg.io/api/games';

  constructor(private httpclient: HttpClient) { }

  devolverProductos() {
    return this.httpclient.get<any>(`${this.apiUrl}`);
  }
}
