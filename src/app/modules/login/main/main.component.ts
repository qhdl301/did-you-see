import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(
    private authService: AuthService,
    private router: Router  
  ){ }

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
