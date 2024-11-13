import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRosterComponent } from './dashboard-roster/dashboard-roster.component';
import { DashboardWarningsComponent } from './dashboard-warnings/dashboard-warnings.component';
import { DashboardHoursComponent } from './dashboard-hours/dashboard-hours.component';
import { DashboardMessagesComponent } from './dashboard-messages/dashboard-messages.component';
import { DashboardPinnedMessagesComponent } from './dashboard-pinned-messages/dashboard-pinned-messages.component';
import { DashboardChangeRequestsReceivedComponent } from './dashboard-change-requests-received/dashboard-change-requests-received.component';
import { DashboardChangeRequestsSentComponent } from './dashboard-change-requests-sent/dashboard-change-requests-sent.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardRosterComponent,
    DashboardWarningsComponent,
    DashboardHoursComponent,
    DashboardMessagesComponent,
    DashboardPinnedMessagesComponent,
    DashboardChangeRequestsReceivedComponent,
    DashboardChangeRequestsSentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}
