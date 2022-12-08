import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardanimation = false;
  game: Game;


  constructor() {
      this.game ={};
  }

  ngOnInit(): void {
    this.newGame();
    console.log(this.game)
  }

  newGame() {
    this.game = new Game();
  }

  takeCart() {
    this.pickCardanimation = true;
  }
}
