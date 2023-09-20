import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/service/Auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate{

  constructor(private router:Router, private authService: AuthService) {
  }

  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ) :boolean {
   if(this.authService.isLogged()) {
    return true;
   } else {
    this.router.navigate(['login'])
    return false
   }
  }

  
}


