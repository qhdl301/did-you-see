import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // 라우터 관련 심볼을 로드합니다.
import { DashboardComponent } from '../movie/dashboard/dashboard.component';
import { CombineComponent } from './layout/combine/combine.component';

const routes: Routes = [
  {path: 'main', redirectTo: '/main/dashboard', pathMatch:'full'},
  {path : 'main', component: CombineComponent,
    children : [
      {path: 'dashboard',component:DashboardComponent}
    ]
  },
]; // 라우팅 규칙은 이 배열에 등록합니다.

// NgModule의 imports, exports 배열에 RouterModule을 등록합니다.
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
