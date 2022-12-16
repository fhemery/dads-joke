import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Joke } from '../../model/joke';
import { JokeDetailComponent } from '../joke-detail/joke-detail.component';

@Component({
  selector: 'app-jokes-list',
  standalone: true,
  imports: [CommonModule, JokeDetailComponent],
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss'],
})
export class JokesListComponent {
  @Input() jokes: Joke[] = [];
  @Output() favorite = new EventEmitter<Joke>();

  setFavoriteJoke($event: Joke) {
    this.favorite.emit($event);
  }
}
