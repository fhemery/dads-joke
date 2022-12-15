import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-joke-detail',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.scss'],
})
export class JokeDetailComponent {
  @Input() joke = '';
  @Output() isFavorite = new EventEmitter<string>();

  setFavorite() {
    this.isFavorite.emit(this.joke);
  }
}
