import { AuthadminService } from 'src/app/views/services/authadmin.service';
import { Injectable, resolveForwardRef } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardadminGuard implements CanActivate {
  constructor(private as: AuthadminService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      if (this.as.loggedIn() == true) {
        resolve(true)
      }
      else {
        this.router.navigate(['/admin/login'],{queryParams:{returnUrl:state.url}})
        localStorage.removeItem('token')
        resolve(false)
      }
    })
  }



}
