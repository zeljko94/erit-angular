import { Injectable } from '@angular/core';
import { Message } from '../models/message.interface';
import { PinnedMessage } from '../models/pinned-message.interface';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messages = [
    {
      "id": 1,
      "status": "alert",
      "dateFrom": "24.09.2024. 00:00",
      "dateTo": "24.09.2025. 00:00",
      "messageFrom": "ACC ROMA | ",
      "message": "Porta lorem mollis aliquam ut porttitor, lacinia quis vel eros donec ac odio tempor orci...",
      "icon": "mail"
    },
    {
      "id": 2,
      "status": "success",
      "dateFrom": "24.09.2024. 00:00",
      "dateTo": "24.09.2025. 00:00",
      "messageFrom": "AIRAC |",
      "message": "Porta lorem mollis aliquam ut porttitor, lacinia quis vel eros donec ac odio tempor orci...",
      "icon": "mail"
    },
    {
      "id": 3,
      "status": "success",
      "dateFrom": "24.09.2024. 00:00",
      "dateTo": "24.09.2025. 00:00",
      "messageFrom": "ACC ROMA |",
      "message": "Porta lorem mollis aliquam ut porttitor, lacinia quis vel eros donec ac odio tempor orci...",
      "icon": "mail"
    }
  ];

  private pinnedMessages = [
    {
      "icon": "mail_outline",
      "status": ["logout", "login"],
      "datetime": ["24.09.2024. 00:00", "24.09.2025. 00:00"],
      "messageFrom": "AIRAC |",
      "text": "Porta lorem mollis aliquam ut porttitor, lacinia quis vel eros donec ac odio tempor orci...",
      "buttons": ["push_pin"]
    },
    {
      "icon": "mail_outline",
      "status": ["logout", "login"],
      "datetime": ["24.09.2024. 00:00", "24.09.2025. 00:00"],
      "messageFrom": "AIRAC |",
      "text": "Porta lorem mollis aliquam ut porttitor, lacinia quis vel eros donec ac odio tempor orci...",
      "buttons": ["question_mark", "push_pin"]
    },
    {
      "icon": "mail_outline",
      "status": ["logout", "login"],
      "datetime": ["24.09.2024. 00:00", "24.09.2025. 00:00"],
      "messageFrom": "ACC ROMA |",
      "text": "Porta lorem mollis aliquam ut porttitor, lacinia quis vel eros donec ac odio tempor orci...",
      "buttons": ["question_mark", "push_pin"]
    }
  ];

  constructor() { }

  getMessages(): Message[] {
    return this.messages;
  }

  getPinnedMessages(): PinnedMessage[] {
    return this.pinnedMessages;
  }
}
