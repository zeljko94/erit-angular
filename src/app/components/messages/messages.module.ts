import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessagesComponent } from './messages.component';

@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MessagesComponent
  ]
})
export class MessagesModule {}
