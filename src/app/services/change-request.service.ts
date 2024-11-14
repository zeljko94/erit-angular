import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChangeRequestReceived } from 'src/app/models/change-request-received';

@Injectable({
  providedIn: 'root'
})
export class ChangeRequestService {

  private changeRequessReceivedApiUrl = 'assets/data/change-requests-received.json';
  private changeRequessSentApiUrl = 'assets/data/change-requests-sent.json';

  constructor(private http: HttpClient) { }

  getChangeRequestsSent(): Observable<ChangeRequestReceived[]> {
    return this.http.get<ChangeRequestReceived[]>(this.changeRequessReceivedApiUrl);
  }

  getChangeRequestsReceived(): Observable<ChangeRequestReceived[]> {
    return this.http.get<ChangeRequestReceived[]>(this.changeRequessSentApiUrl);
  }
}
