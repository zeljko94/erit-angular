import { Component } from '@angular/core';
import { Warning } from '../../../models/warning.interface';

@Component({
  selector: 'app-dashboard-warnings',
  templateUrl: './dashboard-warnings.component.html',
  styleUrls: ['./dashboard-warnings.component.scss']
})
export class DashboardWarningsComponent {
  warnings: Warning[] = [

  ];
}
