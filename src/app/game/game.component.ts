import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogueAddPlayerComponent } from '../dialogue-add-player/dialogue-add-player.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { update } from '@angular/fire/database';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: Game;
  gameOver: boolean = false;
  gameId: string;



  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog, private router: Router) {

  }

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
      this.gameId = params['gameId'];
      this
        .firestore
        .collection('games')
        .doc(this.gameId)
        .valueChanges()
        .subscribe((game: any) => {
          this.game.currentPlayer = game.currentPlayer;
          this.game.stack = game.stack;
          this.game.playedCards = game.playedCards;
          this.game.players = game.players;
          this.game.currentCard = game.currentCard;
          this.game.pickCardanimation = game.pickCardanimation;
        })
    });
  }

  newGame() {
    this.game = new Game();

  }

  takeCart() {
    if (!this.game.pickCardanimation && this.game.players.length !== 0) {
      this.game.currentCard = this.game.stack.pop();
      this.game.pickCardanimation = true;
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      this.updateGame();

      setTimeout(() => {
        this.game.playedCards.push(this.game.currentCard)
        this.game.pickCardanimation = false;
        this.checkGameOver();
        this.updateGame();
      }, 1000);
    }
  }

  checkGameOver() {
    if (this.game.playedCards.length == 52) {
      this.gameOver = true;
    }
  }

  return() {
    this.router.navigateByUrl('/');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogueAddPlayerComponent);// mit open() öffnent man einen Dialog Komponente

    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        this.updateGame();
      }
    });
  }

  updateGame() {
    this
    .firestore
    .collection('games')
    .doc(this.gameId)
    .update(this.game.toJSON())
  }
}
