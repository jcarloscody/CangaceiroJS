import { sleep } from './../../models/constants';
import { GameStateService } from './../../services/game-state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  count!: number;
  colors: any = {
    red: false,
    blue: false,
    yellow: false,
    green: false
  };

  constructor(private game: GameStateService) { }

  ngOnInit(): void {
    this.game.state.subscribe(
      async (state)=>{
        if (state.count != this.count) {
          await sleep(1000);
          this.count = state.count;
          this.teasePlayer(state.simon);
        }
      }
    );

    this.game.generateSimon();

  }

  guess(event: string) : void {
    this.game.playerGuess(event);
  }

  async teasePlayer(simon: string[]){
    for (let i = 0; i<simon.length; i++){
      this.colors[simon[i]] = true;
      await sleep(500);
      this.colors[simon[i]] = false;
      await sleep(500);
    }

  }
}
