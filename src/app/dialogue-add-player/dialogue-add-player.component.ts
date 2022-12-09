import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue-add-player',
  templateUrl: './dialogue-add-player.component.html',
  styleUrls: ['./dialogue-add-player.component.scss']
})
export class DialogueAddPlayerComponent implements OnInit {
  name: string = '';

  constructor(  public dialogRef: MatDialogRef<DialogueAddPlayerComponent>){

  }

  ngOnInit(){

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
