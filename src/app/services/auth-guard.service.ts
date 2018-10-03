import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate,RouterStateSnapshot } from "@angular/router";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _authService:AuthService) { }

  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    if(this._authService.isAuthenticated()){
      return true;
    }else{
      return false;
    }
  }
}
