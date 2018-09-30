import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import {LoginService} from "../login/login.service"
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanActivateChild,CanLoad{
  constructor(
    private router:Router,
    private loginService:LoginService
    ) {}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
      let url:string = state.url;
      return this.checkLogin(url);
  }
  canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
      return this.canActivate(route,state);
  }
  canLoad(route:Route):boolean{
     let url = `/${route.path}`;
     return this.checkLogin(url);
  }
  checkLogin(url:string):boolean{
    if(this.loginService.isLoggedIn())return true;
    this.loginService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
