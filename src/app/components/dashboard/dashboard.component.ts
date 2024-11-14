import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
  warnings = [
    { date: '24.09.2024', text: 'Minimum rest time', icon: '⚠️' },
    { date: '23.09.2024', text: 'Minimum hours', icon: '⚠️' },
    { date: '19.09.2024', text: 'Check time', icon: 'ℹ️' },
  ];

  newMessages = [
    { date: '24.09.2024', title: 'ACC ROMA', content: 'Lorem ipsum dolor sit amet...' },
    { date: '22.09.2024', title: 'HR Updates', content: 'Please review your schedule...' }
  ];

  pinnedMessages = [
    { date: '24.09.2024', title: 'AIRAC', content: 'Lorem ipsum dolor sit amet...' },
    { date: '21.09.2024', title: 'System Update', content: 'Scheduled maintenance...' }
  ];

  rosterDays = [
    { date: 'Sun 15.09.', shift: 'J' },
    { date: 'Mon 16.09.', shift: 'N' }
  ];

  receivedRequests = [
    { roster: 'LDZO ACS', date: '19.09.24', shift: 'N -> N2', sender: 'Petar Perić', status: 'Pending' },
    { roster: 'LDZO ACS', date: '20.09.24', shift: 'D -> D2', sender: 'Ana Anić', status: 'Approved' }
  ];

  sentRequests = [
    { roster: 'LDZO ACS', date: '19.09.24', shift: 'N -> D', receiver: 'Marko Marić', status: 'Pending' },
    { roster: 'LDZO ACS', date: '18.09.24', shift: 'D -> N', receiver: 'Ivana Ivic', status: 'Declined' }
  ];

  hours = [
    { licenseUnit: 'ACS_LDZO', role: 'ACC', lastWork: '14.09.2024', period: '02.09. - 01.12.', hours: '27:00' },
    { licenseUnit: 'APP_LDZO', role: 'Approach', lastWork: '13.09.2024', period: '02.09. - 01.12.', hours: '19:30' }
  ];
}
