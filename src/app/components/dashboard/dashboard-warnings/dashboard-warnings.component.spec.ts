import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWarningsComponent } from './dashboard-warnings.component';

describe('DashboardWarningsComponent', () => {
  let component: DashboardWarningsComponent;
  let fixture: ComponentFixture<DashboardWarningsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardWarningsComponent]
    });
    fixture = TestBed.createComponent(DashboardWarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
