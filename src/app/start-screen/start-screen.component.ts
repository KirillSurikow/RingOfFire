import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {
    constructor(private router:Router){     // import the router, to navigate

    }

    ngOnInit(): void {
      
    }
    /**
     * navigate from startscreen to the game
     * 
     */
    newGame(){
        this.router.navigateByUrl('/game'); 
    }
}
