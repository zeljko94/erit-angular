import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRosterComponent } from './dashboard-roster.component';

describe('DashboardRosterComponent', () => {
  let component: DashboardRosterComponent;
  let fixture: ComponentFixture<DashboardRosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardRosterComponent]
    });
    fixture = TestBed.createComponent(DashboardRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
