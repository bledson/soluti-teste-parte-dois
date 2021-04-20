import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {LoginService} from "../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: LoginService,
              private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): true | UrlTree {
    return this.checkLogin();
  }

  private checkLogin(): true | UrlTree {
    if (this.service.isUserLoggedIn()) {
      return true
    }
    return this.router.parseUrl('/login');
  }
}
