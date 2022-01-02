import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth : boolean = false;
  isAuthChecking : boolean = false; 

  constructor( 
    private afAuth : AngularFireAuth,
    private router: Router  
  ) { 
    this.afAuth.onAuthStateChanged((user)=>{
      if(!this.isAuthChecking){
        this.isAuthChecking = true;
        if(user){
          this.router.navigate(['main']);  
        }else {
          this.router.navigate(['login']);
        }
      }else {
        this.router.navigate(['login']);
      }
    })
  }
}
