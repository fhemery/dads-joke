import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './profile.service';
import { Subject, takeUntil } from 'rxjs';
import { UserProfile } from '../model/userProfile';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnDestroy {
  profile: UserProfile | null = null;
  unsubscribe$ = new Subject<void>();

  constructor(
    private readonly profileService: ProfileService,
    private readonly authService: AuthService
  ) {
    this.authService.user$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user) => {
        if (user) {
          const id = user?.uid;
          this.profileService
            .getProfile(id)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((profile) => (this.profile = profile));
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.complete();
  }
}
