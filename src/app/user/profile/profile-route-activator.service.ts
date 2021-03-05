import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Injectable()
export class ProfileRouteActivatorService implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const isUserAuthenticated: boolean = this.authService.isAuthenticated();

    if (!isUserAuthenticated) {
      this.router.navigate(['user/login']);
    }
    return isUserAuthenticated;
  }
}
