import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jokes-page-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jokes-page-header.component.html',
  styleUrls: ['./jokes-page-header.component.scss'],
})
export class JokesPageHeaderComponent {
  @Input() total = 0;
}
