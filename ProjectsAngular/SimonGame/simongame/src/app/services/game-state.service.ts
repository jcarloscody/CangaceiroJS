import { START_COUNT, COLORS } from './../models/constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  simon: string[] = [];
  player: string[] = [];
  count!: number;

  constructor() {
    this.count = START_COUNT;
   }

  private get randomColor(): string {
    return COLORS[Math.floor(Math.random() * 4)];
  }

  appendSimon(increment: boolean = false): void {
    if (increment) {
      this.count++;
    }
    this.simon.push(this.randomColor);
  }

  generateSimon(){
    for (let i = 0; i < this.count; i++) {
      this.appendSimon();
    }
    return this.simon;
  }

  restartSimon(): string[] {
    this.count = START_COUNT;
    return this.generateSimon();
  }


  playerGuess(value: string) {
    this.player.push(value);
    if (!this.compereSimon()) {
      this.player = [];
    }
  }

  compereSimon(): boolean {
    for (let i = 0; i < this.player.length; i++){
      if (this.simon[i] !== this.player[i]) {
        return false;
      }
    }
    return true;
  }


}
