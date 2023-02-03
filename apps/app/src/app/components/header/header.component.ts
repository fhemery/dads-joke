import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { catchError, NEVER, Observable } from 'rxjs';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLoggedIn$: Observable<boolean> = this.auth.isLoggedIn$;
  key = '';
  constructor(
    private readonly router: Router,
    private readonly auth: AuthService,
    private readonly afMessaging: AngularFireMessaging
  ) {}

  goToLogin() {
    this.router.navigateByUrl('login');
  }

  logout() {
    this.auth.signOut();
  }

  enableNotification() {
    this.afMessaging.requestToken // getting tokens
      .pipe(
        catchError((error) => {
          console.error(error);
          return NEVER;
        })
      )
      .subscribe((token) => {
        // USER-REQUESTED-TOKEN
        if (token) {
          console.log('Permission granted! Save to the server!', token);
          this.key = token || '';
        } else {
          console.error('User rejected the notification');
        }
      });
  }
}
