import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  auth = firebase.auth;
  
  constructor(private afAuth : AngularFireAuth){ }

  async googleLogin() {
    const provider = new this.auth.GoogleAuthProvider();
    return await this.afAuth.signInWithPopup(provider);
  }
  
}
