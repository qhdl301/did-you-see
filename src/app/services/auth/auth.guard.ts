import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  UserLogedIn : boolean = false;

  constructor(
    private router: Router,
    private afAuth : AngularFireAuth,
  ) { 
    this.afAuth.user.subscribe(res => {
      if (res) {
          this.UserLogedIn = true;
        } else {
          this.UserLogedIn = false;          
        }
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
    if (this.UserLogedIn) {
      this.router.navigate(['/main']);
      return true;
    }
      
    this.router.navigate(['/login']);
    return false; 
  }
  
}
