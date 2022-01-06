import { Injectable } from '@angular/core';

// firebase 
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'    // root, any, platform 3개가지 있음
                          
})

export class LoginService {
  user: Observable<firebase.User | null>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
  }

  async fnGoogleLogin() {
    await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  fnlogout() {
    this.afAuth.signOut();
  }  
  
}