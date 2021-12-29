import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular moudle
import { LoginModule } from './modules/login/login.module';
import { MovieModule } from './modules/movie/movie.module';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { MainComponent } from './modules/main/main.component';
import { AppRoutingModule } from './modules/routing.module';
import { AppComponent } from './components/app/app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    MainComponent,
    NotFoundComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    MovieModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  exports: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
