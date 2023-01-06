import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Joke } from '../../../model/joke';

@Component({
  selector: 'app-favorites-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss'],
})
export class FavoritesListComponent {
  @Input() favorites: Joke[] = [];
}
