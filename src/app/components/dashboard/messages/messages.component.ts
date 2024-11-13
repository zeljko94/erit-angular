import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  constructor(private messagesService: MessagesService) {}
  messages = this.messagesService.getMessages();

}