import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/loginService';
import { Router } from '@angular/router';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(
    private LoginService: LoginService,
    private router: Router  
  ){ }

  googleLogin() {
    this.LoginService.fnGoogleLogin()
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
