import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jokes-favorite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jokes-favorite.component.html',
  styleUrls: ['./jokes-favorite.component.scss'],
})
export class JokesFavoriteComponent {
  @Input() favorite = '';
}
