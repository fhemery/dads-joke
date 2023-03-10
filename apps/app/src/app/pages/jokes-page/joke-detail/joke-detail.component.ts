import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Joke } from '../../model/joke';

@Component({
  selector: 'app-joke-detail',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JokeDetailComponent {
  @Input() joke: Joke | null = null;
  @Output() isFavorite = new EventEmitter<Joke>();

  setFavorite() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.isFavorite.emit(this.joke!);
  }

  getPun() {
    console.log(`Called getPun`);
    return this.joke?.pun;
  }
}
