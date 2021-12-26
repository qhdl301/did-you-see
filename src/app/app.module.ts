import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular moudle
import { LoginModule } from './modules/login/login.module';
import { MovieModule } from './modules/movie/movie.module';
import { TodoModule } from './modules/todo/todo.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainComponent } from './components/main/main.component';
import { AppRoutingModule } from './modules/routing.module';
import { AppComponent } from './components/app/app.component';

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
    TodoModule,
    AppRoutingModule
  ],
  exports: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
