import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeDetailComponent } from './joke-detail/joke-detail.component';

@Component({
  selector: 'app-jokes-page',
  standalone: true,
  imports: [CommonModule, JokeDetailComponent],
  templateUrl: './jokes-page.component.html',
  styleUrls: ['./jokes-page.component.scss'],
})
export class JokesPageComponent {
  jokes = [
    'Que fait une fraise sur un cheval ? Tagada !',
    `C'est un type qui rentre dans un café... et plouf.`,
  ];
  selectedJoke = '';

  setFavoriteJoke(joke: string) {
    this.selectedJoke = joke;
  }
}
