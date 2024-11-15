import { Injectable } from '@angular/core';
import { ChangeRequestReceived } from 'src/app/models/change-request-received';

@Injectable({
  providedIn: 'root'
})
export class ChangeRequestService {

  private changeRequestsReceived: ChangeRequestReceived[] = [
    {
      "roster": "LDZO ACS",
      "date": "19.09.24",
      "shift": "N --> N2",
      "sender": "Petar Perić",
      "status": "pending"
    },
    {
      "roster": "LDZO ACS",
      "date": "23.09.24",
      "shift": "J --> P",
      "sender": "Marko Marić",
      "status": "pending"
    },
    {
      "roster": "LDZO ACS",
      "date": "24.09.24",
      "shift": "P --> J",
      "sender": "Tomislav Horvat",
      "status": "rejected"
    }
  ];


  private changeRequetsSent: ChangeRequestReceived[] = [
    {
      "roster": "LDZO ACS",
      "date": "19.09.24",
      "shift": "N --> N2",
      "sender": "Petar Perić",
      "status": "approved"
    },
    {
      "roster": "LDZO ACS",
      "date": "23.09.24",
      "shift": "J --> P",
      "sender": "Marko Marić",
      "status": "pending"
    },
    {
      "roster": "LDZO ACS",
      "date": "24.09.24",
      "shift": "P --> J",
      "sender": "Tomislav Horvat",
      "status": "rejected"
    }
  ];

  constructor() { }

  getChangeRequestsSent(): ChangeRequestReceived[] {
    return this.changeRequestsReceived;
  }

  getChangeRequestsReceived(): ChangeRequestReceived[] {
    return this.changeRequetsSent;
  }
}
