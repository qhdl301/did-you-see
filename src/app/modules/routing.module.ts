import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // 라우터 관련 심볼을 로드합니다.
import { LoginModule } from './login/login.module';
import { MainLayoutModule } from './main/layout.module';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginModule},
  {path: 'main', component: MainLayoutModule},
  {path: '**', component: NotFoundComponent}
]; // 라우팅 규칙은 이 배열에 등록합니다.

// NgModule의 imports, exports 배열에 RouterModule을 등록합니다.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
