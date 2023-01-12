import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { UserProfile } from '../model/userProfile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private readonly firestore: Firestore) {}

  getProfile(userId: string): Observable<UserProfile> {
    const profile = doc(this.firestore, `profiles/${userId}`);
    return docData(profile, {
      idField: 'id',
    }) as Observable<UserProfile>;
  }
}
