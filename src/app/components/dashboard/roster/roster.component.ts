import { Component } from '@angular/core';
import { RosterService } from '../../../services/roster.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent {
  rosterDays = this.rosterService.getRosterDays();

  constructor(private rosterService: RosterService) {}
}