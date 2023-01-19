import { Route } from '@angular/router';
import { JokesPageComponent } from './pages/jokes-page/jokes-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { UnloggedUsersOnlyGuard } from './services/unlogged-users-only-guard.service';
import { LoggedUsersOnlyGuard } from './services/logged-users-only-guard.service';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login-page/login-routes').then((m) => m.loginPageRoutes),
    canActivate: [UnloggedUsersOnlyGuard],
  },
  {
    path: 'favorites',
    component: FavoritesPageComponent,
    canActivate: [LoggedUsersOnlyGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile-page/profile-routes').then(
        (m) => m.profileRoutes
      ),
    canActivate: [LoggedUsersOnlyGuard],
  },
  { path: '', component: JokesPageComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];
