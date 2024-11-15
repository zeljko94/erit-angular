import { Component, OnInit } from '@angular/core';
import { ChangeRequestService } from 'src/app/services/change-request.service';
import { ChangeRequestReceived } from 'src/app/models/change-request-received';

@Component({
  selector: 'app-dashboard-change-requests-received',
  templateUrl: './dashboard-change-requests-received.component.html',
  styleUrls: ['./dashboard-change-requests-received.component.scss']
})
export class DashboardChangeRequestsReceivedComponent implements OnInit {

  changeRequests: ChangeRequestReceived[] = [];

  constructor(private changeRequestService: ChangeRequestService) { }

  ngOnInit(): void {
    this.loadChangeRequests();
  }

  loadChangeRequests(): void {
    this.changeRequests = this.changeRequestService.getChangeRequestsReceived();
  }
}
