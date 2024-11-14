import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor() { }

  getMessages() {
    return [
      {
        date: new Date('2024-11-01T08:30:00'),
        sender: 'John Doe',
        content: 'This is a message content for John Doe.'
      },
      {
        date: new Date('2024-11-02T09:15:00'),
        sender: 'Jane Smith',
        content: 'This is a message content for Jane Smith.'
      },
      {
        date: new Date('2024-11-03T10:45:00'),
        sender: 'Alice Brown',
        content: 'This is a message content for Alice Brown.'
      }
    ];
  }
}
