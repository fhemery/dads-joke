import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeDetailComponent } from './joke-detail/joke-detail.component';
import { Joke } from '../model/joke';

@Component({
  selector: 'app-jokes-page',
  standalone: true,
  imports: [CommonModule, JokeDetailComponent],
  templateUrl: './jokes-page.component.html',
  styleUrls: ['./jokes-page.component.scss'],
})
export class JokesPageComponent {
  jokes: Joke[] = [
    {
      id: '1',
      pun: 'Que fait une fraise sur un cheval ? Tagada !',
      isFavorite: false,
    },
    {
      id: '2',
      pun: `C'est un type qui rentre dans un café... et plouf.`,
      isFavorite: false,
    },
  ];

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
