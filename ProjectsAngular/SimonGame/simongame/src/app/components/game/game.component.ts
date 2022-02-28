import { GameStateService } from './../../services/game-state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private game: GameStateService) { }

  ngOnInit(): void {
    this.game.state.subscribe(
      (state)=>{
        console.warn(state)
      }
    );

    this.game.generateSimon();

  }

  guess(event: string) : void {
    this.game.playerGuess(event);
  }
}
