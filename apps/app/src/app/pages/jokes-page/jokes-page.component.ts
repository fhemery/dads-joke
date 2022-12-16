import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeDetailComponent } from './joke-detail/joke-detail.component';
import { Joke } from '../model/joke';
import { JokesService } from './jokes.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-jokes-page',
  standalone: true,
  imports: [CommonModule, JokeDetailComponent],
  templateUrl: './jokes-page.component.html',
  styleUrls: ['./jokes-page.component.scss'],
})
export class JokesPageComponent implements OnDestroy {
  jokes$: Observable<Joke[]>;
  favoriteJoke = '';

  private unsubscribe$ = new Subject<void>();

  constructor(private readonly jokesServices: JokesService) {
    this.jokes$ = jokesServices.getJokes();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  setFavoriteJoke(joke: Joke) {
    console.log('isFavorite called with', joke);
    this.favoriteJoke = joke.pun;
  }
}
