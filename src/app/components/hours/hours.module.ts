import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HoursComponent } from './hours.component';

@NgModule({
  declarations: [
    HoursComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HoursComponent
  ]
})
export class HoursModule {}
