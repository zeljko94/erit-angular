import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RosterService {

  constructor() { }

  getRosterDays() {
    const rosterDays = [
      { name: 'Monday', date: '2024-11-13', shift: 'morning' },
      { name: 'Tuesday', date: '2024-11-14', shift: 'afternoon' },
      { name: 'Wednesday', date: '2024-11-15', shift: 'evening' },
      { name: 'Thursday', date: '2024-11-16', shift: 'morning' },
      { name: 'Friday', date: '2024-11-17', shift: 'afternoon' },
      { name: 'Saturday', date: '2024-11-18', shift: 'off' },
      { name: 'Sunday', date: '2024-11-19', shift: 'off' },
    ];
    return rosterDays;
  }
}
