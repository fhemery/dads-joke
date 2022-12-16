import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeDetailComponent } from './joke-detail/joke-detail.component';
import { Joke } from '../model/joke';
import { JokesService } from './jokes.service';

@Component({
  selector: 'app-jokes-page',
  standalone: true,
  imports: [CommonModule, JokeDetailComponent],
  templateUrl: './jokes-page.component.html',
  styleUrls: ['./jokes-page.component.scss'],
})
export class JokesPageComponent {
  jokes: Joke[] = [];

  constructor(private readonly jokesServices: JokesService) {
    jokesServices.getJokes().subscribe((jokes) => {
      this.jokes = jokes;
    });
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
