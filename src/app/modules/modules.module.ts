import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCommonModule } from './common/common.module';
import { ProgressBarComponent } from './common/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    CustomCommonModule
  ],
  exports : [
    ProgressBarComponent
  ]
})
export class ModulesModule { }