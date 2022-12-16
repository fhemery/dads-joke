import { Route } from '@angular/router';
import { JokesPageComponent } from './pages/jokes-page/jokes-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const appRoutes: Route[] = [
  { path: 'login', component: LoginPageComponent },
  { path: '', component: JokesPageComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];
