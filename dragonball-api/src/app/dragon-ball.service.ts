import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragonBallService {
  private apiUrl = 'https://web.dragonball-api.com/api';

  constructor(private http: HttpClient) { }

  getPersonajes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/character`);
  }

  getPlanetas(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/planet`);
  }

  buscarPersonajes(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/character?search=${query}`);
  }
}