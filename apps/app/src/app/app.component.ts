import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MatButtonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';
}
