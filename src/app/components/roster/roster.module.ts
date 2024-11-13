import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RosterComponent } from './roster.component';

@NgModule({
  declarations: [
    RosterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RosterComponent
  ]
})
export class RosterModule {}
