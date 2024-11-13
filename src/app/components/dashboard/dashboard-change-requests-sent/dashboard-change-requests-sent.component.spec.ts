import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChangeRequestsSentComponent } from './dashboard-change-requests-sent.component';

describe('DashboardChangeRequestsSentComponent', () => {
  let component: DashboardChangeRequestsSentComponent;
  let fixture: ComponentFixture<DashboardChangeRequestsSentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardChangeRequestsSentComponent]
    });
    fixture = TestBed.createComponent(DashboardChangeRequestsSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
