import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router) {}
  canActivate(): boolean {
    let isAuthenticate = this.authService.isAuthenticate();
    console.log('isAuthenticate',isAuthenticate);
    
    if (isAuthenticate) {
      return true;
    }

    this.route.navigate(['/overview/auth']);
    return false;
  }
}
