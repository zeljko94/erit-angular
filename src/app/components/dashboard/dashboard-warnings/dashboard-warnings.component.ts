import { Component, OnInit } from '@angular/core';
import { Warning } from '../../../models/warning.interface';
import { WarningService } from 'src/app/services/warning.service';

@Component({
  selector: 'app-dashboard-warnings',
  templateUrl: './dashboard-warnings.component.html',
  styleUrls: ['./dashboard-warnings.component.scss']
})
export class DashboardWarningsComponent implements OnInit {

  warnings: Warning[] = [];

  constructor(private warningService: WarningService) {}

  ngOnInit(): void {
    this.loadWarnings();
  }

  loadWarnings(): void {
    this.warningService.getWarnings().subscribe(
      (data: Warning[]) => {
        this.warnings = data;
      },
      (error) => {
        console.error('Error fetching warnings:', error);
      }
    );
  }
}
