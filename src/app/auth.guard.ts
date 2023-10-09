import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class authGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate: CanActivateFn = () => {
    const isAuthenticated = this.authService.isLogedIn();
    
    if (isAuthenticated) {
      return true; // L'accès est autorisé
    } else {
      this.router.navigate(['/login']);
      return false; // L'accès est refusé
    }
  }
}