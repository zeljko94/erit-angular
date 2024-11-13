import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { WarningsComponent } from './warnings.component';

@NgModule({
  declarations: [
    WarningsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    WarningsComponent
  ]
})
export class WarningsModule {}
