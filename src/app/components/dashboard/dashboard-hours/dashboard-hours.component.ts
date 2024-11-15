import { Component, OnInit } from '@angular/core';
import { HoursService } from 'src/app/services/hours.service';
import { Hours } from 'src/app/models/hours.interface';

@Component({
  selector: 'app-dashboard-hours',
  templateUrl: './dashboard-hours.component.html',
  styleUrls: ['./dashboard-hours.component.scss']
})
export class DashboardHoursComponent implements OnInit {
  isCollapsed = false;
  hours: Hours[] = [];

  constructor(private hoursService: HoursService) { }

  ngOnInit(): void {
    this.loadHoursData();
  }

  private loadHoursData(): void {
    this.hours = this.hoursService.getHoursData();
  }


  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
