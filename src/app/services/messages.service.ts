import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message.interface';
import { PinnedMessage } from '../models/pinned-message.interface';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messagesApiUrl = 'assets/data/messages.json';
  private pinnedMessagesApiUrl = 'assets/data/pinned-messages.json';

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.messagesApiUrl);
  }

  getPinnedMessages(): Observable<PinnedMessage[]> {
    return this.http.get<PinnedMessage[]>(this.pinnedMessagesApiUrl);
  }
}
