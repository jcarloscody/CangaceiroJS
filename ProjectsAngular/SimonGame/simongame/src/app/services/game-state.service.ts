import { START_COUNT, COLORS } from './../models/constants';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  simon: string[] = [];
  player: string[] = [];
  count!: number;
  state = new Subject<any>();

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
    this.setState()
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
      this.simon = [];
      this.restartSimon();
    }
    this.setState()
  }

  compereSimon(): boolean {
    for (let i = 0; i < this.player.length; i++){
      if (this.simon[i] !== this.player[i]) {
        return false;
      }
    }
    if (this.player.length == this.simon.length) {
      this.updateGame();
    }
    return true;
  }

  updateGame(): void {
    this.appendSimon(true);
    this.player = [];
  }

  setState(){
    this.state.next({
      player: this.player,
      simon: this.simon,
      count: this.count
    })
  }


}
