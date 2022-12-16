import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeDetailComponent } from './joke-detail/joke-detail.component';
import { Joke } from '../model/joke';
import { JokesService } from './jokes.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-jokes-page',
  standalone: true,
  imports: [CommonModule, JokeDetailComponent],
  templateUrl: './jokes-page.component.html',
  styleUrls: ['./jokes-page.component.scss'],
})
export class JokesPageComponent implements OnDestroy {
  jokes: Joke[] = [];

  private unsubscribe$ = new Subject<void>();

  constructor(private readonly jokesServices: JokesService) {
    jokesServices
      .getJokes()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((jokes) => {
        this.jokes = jokes;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  setFavoriteJoke(joke: Joke) {
    console.log('isFavorite called with', joke);
    this.jokes = this.jokes.map((j) =>
      j.id === joke.id ? { ...j, isFavorite: true } : j
    );
  }

  setUnfavoriteJoke($event: Joke) {
    this.jokes = this.jokes.map((j) =>
      j.id === $event.id ? { ...j, isFavorite: false } : j
    );
  }
}
