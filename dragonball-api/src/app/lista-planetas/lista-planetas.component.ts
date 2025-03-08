import { Component, OnInit } from '@angular/core';
import { DragonBallService } from '../dragon-ball.service';

@Component({
  selector: 'app-lista-planetas',
  standalone: false,
  templateUrl: './lista-planetas.component.html',
  styleUrl: './lista-planetas.component.css'
})
export class ListaPlanetasComponent implements OnInit {
  planetas: any[] = [];

  constructor(private dragonBallService: DragonBallService) { }

  ngOnInit(): void {
    this.dragonBallService.getPlanetas().subscribe(data => {
      this.planetas = data;
    });
  }
}
