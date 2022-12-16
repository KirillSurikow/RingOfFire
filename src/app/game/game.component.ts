import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import {MatDialog} from '@angular/material/dialog';
import { DialogueAddPlayerComponent } from '../dialogue-add-player/dialogue-add-player.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardanimation = false;
  currentCard: string = '';
  game: Game;
  gameOver:boolean = false;
  


  constructor(public dialog: MatDialog, private router:Router) {

  }

  ngOnInit(): void {
    this.newGame();
    console.log(this.game)
  }

  newGame() {
    this.game = new Game();
  }

  takeCart() {
      if (!this.pickCardanimation && this.game.players.length !== 0) {
        this.currentCard = this.game.stack.pop();
        this.pickCardanimation = true;
        console.log(this.pickCardanimation);
        this.game.currentPlayer ++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
        
        setTimeout(() => {
          this.game.playedCards.push(this.currentCard)
          this.pickCardanimation = false;
          this.checkGameOver();
        }, 1000);
      }
  }

  checkGameOver(){
    if(this.game.playedCards.length == 52){
      this.gameOver = true;
    }
  }

  return(){
    this.router.navigateByUrl('/'); 
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogueAddPlayerComponent);// mit open() öffnent man einen Dialog Komponente

    dialogRef.afterClosed().subscribe(name => {
      if(name && name.length > 0){
        this.game.players.push(name)
      }
    });
  }
}
