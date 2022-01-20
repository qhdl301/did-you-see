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
import { MainLayoutModule } from './modules/main/layout.module';

@NgModule({
  declarations: [
    NotFoundComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    LoginModule,
    MovieModule,
    MainLayoutModule,
    ModulesModule,
    AppRoutingModule,             // 모듈들을 맨 마지막에 나둬야 함
  ],
  exports: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
