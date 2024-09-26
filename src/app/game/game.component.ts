import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { log } from 'console';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  game!: Game;

constructor () {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game= new Game();
    console.log(this.game);
    
  }

  takeCard(){
    this.pickCardAnimation = true;
  }

}
