import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChangeRequestsReceivedComponent } from './dashboard-change-requests-received.component';

describe('DashboardChangeRequestsReceivedComponent', () => {
  let component: DashboardChangeRequestsReceivedComponent;
  let fixture: ComponentFixture<DashboardChangeRequestsReceivedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardChangeRequestsReceivedComponent]
    });
    fixture = TestBed.createComponent(DashboardChangeRequestsReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
