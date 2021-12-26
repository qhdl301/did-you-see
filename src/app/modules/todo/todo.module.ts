import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import {TodoRoutingModule} from './routing.module'



@NgModule({
  // declartions 속성에 어떤 컴포넌트를 넣을 것인가를 고려하는 것이 Angular 모듈화의 핵심이다.
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodoModule { }
