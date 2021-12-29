import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular moudle
import { LoginModule } from './modules/login/login.module';
import { MovieModule } from './modules/movie/movie.module';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { AppRoutingModule } from './modules/routing.module';
import { AppComponent } from './components/app/app.component';

// Angular Firebase
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    NotFoundComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    MovieModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  exports: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
