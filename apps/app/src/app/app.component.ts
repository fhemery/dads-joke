import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { JokesPageComponent } from './pages/jokes-page/jokes-page.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    HeaderComponent,
    FooterComponent,
    JokesPageComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  getVersion() {
    return '1.2.4';
  }
}
