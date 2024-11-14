import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.interface';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-dashboard-messages',
  templateUrl: './dashboard-messages.component.html',
  styleUrls: ['./dashboard-messages.component.scss']
})
export class DashboardMessagesComponent implements OnInit {
  isCollapsed = false;
  messages: Message[] = [];

  constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(): void {
    this.messagesService.getMessages().subscribe((data: Message[]) => {
      this.messages = data;
    });
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
