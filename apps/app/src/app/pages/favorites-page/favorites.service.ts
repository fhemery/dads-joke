import { Injectable } from '@angular/core';
import { from, map, Observable, switchMap, take } from 'rxjs';
import { Joke } from '../model/joke';
import { AuthService } from '../../services/auth.service';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(
    private readonly auth: AuthService,
    private readonly firestore: Firestore
  ) {}

  getFavorites(userId: string): Observable<Joke[]> {
    const favorites = collection(this.firestore, `favorites/${userId}/jokes`);
    return collectionData(favorites, {
      idField: 'id',
    }) as Observable<Joke[]>;
  }

  addJoke(joke: Joke): void {
    this.auth.user$
      .pipe(
        map((u) => u?.uid || ''),
        switchMap((userId) => {
          const favorites = collection(
            this.firestore,
            `favorites/${userId}/jokes`
          );
          return from(addDoc(favorites, joke));
        }),
        take(1)
      )
      .subscribe();
  }
}
