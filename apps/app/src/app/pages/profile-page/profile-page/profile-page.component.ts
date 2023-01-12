import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './profile.service';
import { Observable } from 'rxjs';
import { UserProfile } from '../model/userProfile';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
  profile$: Observable<UserProfile | null>;

  constructor(private readonly profileService: ProfileService) {
    this.profile$ = this.profileService.getProfile();
  }
}
