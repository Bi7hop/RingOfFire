import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';




export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatCardModule
    ]
};
