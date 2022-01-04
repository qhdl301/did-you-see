import { Component } from '@angular/core';
import { GoogleLoginService } from 'src/app/services/googleLogin/googleLogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(
    private googleLoginService: GoogleLoginService,
    private router: Router  
  ){ }

  googleLogin() {
    this.googleLoginService.fnGoogleLogin()
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
