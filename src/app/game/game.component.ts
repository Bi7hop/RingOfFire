import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { log } from 'console';
import { PlayerComponent } from "../player/player.component";
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule,
    PlayerComponent, 
    MatIconModule, 
    MatIconButton,
    MatInputModule,
    MatDialogModule,
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = '';
  game!: Game;

constructor (public dialog: MatDialog) {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game= new Game();
    console.log(this.game);
    
  }

  takeCard(){
    if(!this.pickCardAnimation) {
    this.currentCard = this.game.stack.pop() ?? '';
    console.log(this.currentCard);   
    this.pickCardAnimation = true;

    setTimeout(()=>{
      this.pickCardAnimation = false;
    }, 1500);
  }
}


openDialog(): void {
  const dialogRef = this.dialog.open(DialogAddPlayerComponent);

  dialogRef.afterClosed().subscribe((name: string) => {
    this.game.players.push(name);
    
  });
}

}
