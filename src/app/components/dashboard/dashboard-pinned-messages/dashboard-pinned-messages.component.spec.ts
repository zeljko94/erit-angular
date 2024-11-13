import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPinnedMessagesComponent } from './dashboard-pinned-messages.component';

describe('DashboardPinnedMessagesComponent', () => {
  let component: DashboardPinnedMessagesComponent;
  let fixture: ComponentFixture<DashboardPinnedMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPinnedMessagesComponent]
    });
    fixture = TestBed.createComponent(DashboardPinnedMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
