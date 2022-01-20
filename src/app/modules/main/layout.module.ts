import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombineComponent } from './layout/combine/combine.component';
import { MainRoutingModule } from './routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CombineComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
  ]
})
export class MainLayoutModule { }
