import { Component, OnInit } from '@angular/core';
import { Roster } from 'src/app/models/roster.interface';
import { RosterService } from 'src/app/services/roster.service';


@Component({
  selector: 'app-dashboard-roster',
  templateUrl: './dashboard-roster.component.html',
  styleUrls: ['./dashboard-roster.component.scss']
})
export class DashboardRosterComponent implements OnInit {
  roster: Roster[] = [];

  constructor(private rosterService: RosterService) {}

  ngOnInit(): void {
    this.roster = this.rosterService.getRoster();
  }
}
