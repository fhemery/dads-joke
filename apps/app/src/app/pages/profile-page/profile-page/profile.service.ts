import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { UserProfile } from '../model/userProfile';
import { AuthService } from '../../../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private readonly authService: AuthService,
    private readonly firestore: Firestore
  ) {}

  getProfile(): Observable<UserProfile | null> {
    return this.authService.user$.pipe(
      switchMap((user) => {
        if (user) {
          const id = user?.uid;
          return this.getProfileData(id);
        }
        return of(null);
      })
    );
  }

  private getProfileData(userId: string): Observable<UserProfile> {
    const profile = doc(this.firestore, `profiles/${userId}`);
    return docData(profile, {
      idField: 'id',
    }) as Observable<UserProfile>;
  }
}
