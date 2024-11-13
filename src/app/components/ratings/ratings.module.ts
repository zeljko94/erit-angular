import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RatingsComponent } from './ratings.component';

@NgModule({
  declarations: [
    RatingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RatingsComponent
  ]
})
export class RatingsModule {}
