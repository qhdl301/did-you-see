import { Injectable } from '@angular/core';

// firebase 
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'    // root, any, platform 3개가지 있음
})

export class AuthService {
  auth = firebase.auth;
  
  constructor(private afAuth : AngularFireAuth){ }

  async googleLogin() {
    const provider = new this.auth.GoogleAuthProvider();
    return await this.afAuth.signInWithPopup(provider);
  }
}
