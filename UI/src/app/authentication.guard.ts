import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private myRoute: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('SeesionUser')) {
      console.log('auhguard', localStorage.getItem('SeesionUser'));
      return true;
    } else {
      this.myRoute.navigate(['/']);
      return false;
    }
  }
}
