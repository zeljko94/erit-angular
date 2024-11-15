import { Component, OnInit } from '@angular/core';
import { ChangeRequestReceived } from 'src/app/models/change-request-received';
import { ChangeRequestService } from 'src/app/services/change-request.service';

@Component({
  selector: 'app-dashboard-change-requests-sent',
  templateUrl: './dashboard-change-requests-sent.component.html',
  styleUrls: ['./dashboard-change-requests-sent.component.scss']
})
export class DashboardChangeRequestsSentComponent implements OnInit {
  changeRequests: ChangeRequestReceived[] = [];

  constructor(private changeRequestService: ChangeRequestService) {}

  ngOnInit(): void {
    this.loadChangeRequests();
  }

  loadChangeRequests(): void {
    this.changeRequests = this.changeRequestService.getChangeRequestsSent();
  }
}
