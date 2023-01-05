import { RouterModule } from '@angular/router';
import { Component, HostBinding } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { JokesPageComponent } from './pages/jokes-page/jokes-page.component';
import { TranslateService } from '@ngx-translate/core';
import { en } from './translations/en';
import { fr } from './translations/fr';

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
  version = '1.2.4';
  @HostBinding('class') class = 'app';

  constructor(private readonly translate: TranslateService) {
    translate.setTranslation('en', en);
    translate.setTranslation('fr', fr);
    translate.setDefaultLang('en'); // Fallback

    translate.use('en');
  }
}
