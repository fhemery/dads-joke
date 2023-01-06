import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeDetailComponent } from './joke-detail/joke-detail.component';
import { Joke } from '../model/joke';
import { JokesService } from './jokes.service';
import { Observable } from 'rxjs';
import { JokePageModel } from './model/joke-page-model';
import { JokesPageHeaderComponent } from './jokes-page-header/jokes-page-header.component';
import { JokesListComponent } from './jokes-list/jokes-list.component';
import { JokesFavoriteComponent } from './jokes-favorite/jokes-favorite.component';
import { FavoritesService } from '../favorites-page/favorites.service';

@Component({
  selector: 'app-jokes-page',
  standalone: true,
  imports: [
    CommonModule,
    JokeDetailComponent,
    JokesPageHeaderComponent,
    JokesListComponent,
    JokesFavoriteComponent,
  ],
  templateUrl: './jokes-page.component.html',
  styleUrls: ['./jokes-page.component.scss'],
})
export class JokesPageComponent {
  model$: Observable<JokePageModel>;
  favoriteJoke = '';

  constructor(
    private readonly jokesServices: JokesService,
    private readonly favoritesService: FavoritesService
  ) {
    this.model$ = jokesServices.getJokesWithTotal();
  }

  setFavoriteJoke(joke: Joke) {
    console.log('isFavorite called with', joke);
    this.favoritesService.addJoke(joke);
    this.favoriteJoke = joke.pun;
  }
}
