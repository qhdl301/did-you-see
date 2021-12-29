import { Component, OnInit } from '@angular/core';

// firebase 
import firebase from 'firebase/compat/app';
import {Router} from "@angular/router"
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { 
    AngularFireModule.initializeApp(environment.firebase);
  }

  ngOnInit()  {
    const user = firebase.auth().currentUser;
    if(!user) {
      this.router.navigate(['/login']);
    }
  }

}
