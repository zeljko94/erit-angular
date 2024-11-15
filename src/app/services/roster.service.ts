import { Injectable } from '@angular/core';
import { Roster } from '../models/roster.interface';

@Injectable({
  providedIn: 'root'
})
export class RosterService {
  private readonly roster = [
    {
      "day": "Sun 15.09.",
      "shift": "J",
      "location": "Oblasna",
      "icon": "menu",
      "active": true
    },
    {
      "day": "Mon 16.09.",
      "shift": "P",
      "location": "Prilaz",
      "icon": "menu",
      "active": false
    },
    {
      "day": "Tue 17.09.",
      "shift": "N",
      "location": "",
      "icon": "",
      "active": false
    },
    {
      "day": "Wed 18.09.",
      "shift": "N2",
      "location": "",
      "icon": "",
      "active": false
    },
    {
      "day": "Thu 19.09.",
      "shift": "J",
      "location": "",
      "icon": "school",
      "active": false
    }
  ];

  constructor() { }

  getRoster(): Roster[] {
    return this.roster;
  }
}
