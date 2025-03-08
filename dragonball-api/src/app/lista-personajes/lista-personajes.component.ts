import { Component, OnInit } from '@angular/core';
import { DragonBallService } from '../dragon-ball.service';
@Component({
  selector: 'app-lista-personajes',
  standalone: false,
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.css'
})
export class ListaPersonajesComponent implements OnInit {
  personajes: any[] = [];

  constructor(private dragonBallService: DragonBallService) { }

  ngOnInit(): void {
    this.dragonBallService.getPersonajes().subscribe(data => {
      this.personajes = data;
    });
  }
}
