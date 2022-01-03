import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular moudle
import { LoginModule } from './modules/login/login.module';
import { MovieModule } from './modules/movie/movie.module';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { AppRoutingModule } from './modules/routing.module';
import { AppComponent } from './components/app/app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ModulesModule } from './modules/modules.module';
import { MainModule } from './modules/main/layout.module';

@NgModule({
  declarations: [
    NotFoundComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    MovieModule,
    MainModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ModulesModule,
  ],
  exports: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
