import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';



@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconButton,
  ],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {

  name: string = '';



  onNoClick(){
    
  }

}
