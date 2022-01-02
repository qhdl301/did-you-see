import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(
    private authService: AuthService,
    private afAuth : AngularFireAuth,
    private router: Router  
  ){
    this.afAuth.onAuthStateChanged((user)=>{
      if (user) {
        this.router.navigate(['main']);
      } else {
        this.router.navigate(['login']);
      }
    })
  }

  async googleLogin() {
    this.authService.googleLogin()
    .then((user) => {
      this.goMain();
    }).catch(err => {
      console.log(err);
      alert('로그인 실패');
    })
  }
  goMain() : void {
    this.router.navigate(['main']);
  }

}
