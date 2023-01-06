import { Injectable } from '@angular/core';
import { from, map, Observable, switchMap, take } from 'rxjs';
import { Joke } from '../model/joke';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(
    private readonly firestore: AngularFirestore,
    private readonly auth: AuthService
  ) {}

  getFavorites(userId: string): Observable<Joke[]> {
    return this.firestore
      .collection<Joke>(`favorites/${userId}/jokes`)
      .valueChanges()
      .pipe(map((j) => j || []));
  }

  addJoke(joke: Joke): void {
    this.auth.user$
      .pipe(
        map((u) => u?.uid || ''),
        switchMap((uid) => {
          if (!uid) throw Error('Not logged');
          return from(
            this.firestore.collection<Joke>(`favorites/${uid}/jokes`).add(joke)
          );
        }),
        take(1)
      )
      .subscribe();
  }
}
