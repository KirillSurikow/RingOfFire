import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {
    constructor(private firestore : AngularFirestore,  private router:Router){     // import the router, to navigate

    }

    ngOnInit(): void {
      
    }
    /**
     * navigate from startscreen to the game
     * 
     */
    newGame(){
      let game = new Game();
      this.firestore
      .collection('games')
      .add(game.toJSON())
      .then((gameInfo: any)=>{
        this.router.navigateByUrl('/game/' + gameInfo.id); 
      })
        
    }
}
