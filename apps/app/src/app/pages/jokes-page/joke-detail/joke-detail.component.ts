import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Joke } from '../../model/joke';

@Component({
  selector: 'app-joke-detail',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.scss'],
})
export class JokeDetailComponent {
  @Input() joke: Joke | null = null;
  @Output() isFavorite = new EventEmitter<Joke>();
  @Output() isUnfavorite = new EventEmitter<Joke>();

  setFavorite() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.isFavorite.emit(this.joke!);
  }

  setUnfavorite() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.isUnfavorite.emit(this.joke!);
  }
}
