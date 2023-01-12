import { Route } from '@angular/router';
import { JokesPageComponent } from './pages/jokes-page/jokes-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page/profile-page.component';
import { UnloggedUsersOnlyGuard } from './services/unlogged-users-only-guard.service';
import { LoggedUsersOnlyGuard } from './services/logged-users-only-guard.service';

export const appRoutes: Route[] = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [UnloggedUsersOnlyGuard],
  },
  {
    path: 'favorites',
    component: FavoritesPageComponent,
    canActivate: [LoggedUsersOnlyGuard],
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [LoggedUsersOnlyGuard],
  },
  { path: '', component: JokesPageComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];
