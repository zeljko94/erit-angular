import { Component, OnInit } from '@angular/core';
import { PinnedMessage } from 'src/app/models/pinned-message.interface';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-dashboard-pinned-messages',
  templateUrl: './dashboard-pinned-messages.component.html',
  styleUrls: ['./dashboard-pinned-messages.component.scss']
})
export class DashboardPinnedMessagesComponent implements OnInit {
  isCollapsed = false;
  messages: PinnedMessage[] = [];

  constructor(private messageService: MessagesService) {}

  ngOnInit(): void {
    this.messages = this.messageService.getPinnedMessages();
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
