import { Route } from '@angular/router';
import { JokesPageComponent } from './pages/jokes-page/jokes-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page/profile-page.component';

export const appRoutes: Route[] = [
  { path: 'login', component: LoginPageComponent },
  { path: 'favorites', component: FavoritesPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: '', component: JokesPageComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];
