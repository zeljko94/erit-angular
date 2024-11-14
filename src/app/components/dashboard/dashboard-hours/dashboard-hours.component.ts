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
  changeRequests: Hours[] = [];

  constructor(private hoursService: HoursService) { }

  ngOnInit(): void {
    this.loadHoursData();
  }

  private loadHoursData(): void {
    this.hoursService.getHoursData().subscribe(
      (data: Hours[]) => {
        this.changeRequests = data;
      },
      (error) => {
        console.error('Error loading hours data', error);
      }
    );
  }


  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
