import { Injectable } from '@angular/core';

// firebase 
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'    // root, any, platform 3개가지 있음
})

export class AuthService {
  constructor(private afAuth : AngularFireAuth){ }

  async googleLogin() : Promise<firebase.auth.UserCredential>{
    const provider = new firebase.auth.GoogleAuthProvider();
    return await this.afAuth.signInWithPopup(provider);
  }
}
