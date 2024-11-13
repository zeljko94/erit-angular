import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TrainingComponent } from './training.component';

@NgModule({
  declarations: [
    TrainingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TrainingComponent
  ]
})
export class TrainingModule {}
