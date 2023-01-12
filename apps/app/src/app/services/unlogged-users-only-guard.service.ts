import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UnloggedUsersOnlyGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isLoggedIn$.pipe(map((isLoggedIn) => !isLoggedIn));
  }
}
