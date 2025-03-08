import { Component } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  query: string = '';
  mediaType: string = 'image';
  results: any[] = [];

  constructor(private nasaApi: NasaApiService) { }

  search(): void {
    this.nasaApi.buscar(this.query, this.mediaType).subscribe(data => {
      this.results = data.collection.items;
    });
  }
}
