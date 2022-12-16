import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserService } from '../services/auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class NoguarduserGuard implements CanActivateChild {
  constructor(private as: AuthUserService, private route: Router) {

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Promise((resolve, reject) => {
      if (this.as.userLoggedIn() == false) {
        resolve(true)
      }
      else {
        resolve(false)
        this.route.navigate(['/'])
      }
    })
  }

}
