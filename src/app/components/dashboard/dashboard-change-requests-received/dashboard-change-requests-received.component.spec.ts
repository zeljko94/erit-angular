import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardChangeRequestsReceivedComponent } from './dashboard-change-requests-received.component';
import { ChangeRequestService } from 'src/app/services/change-request.service';
import { ChangeRequestReceived } from 'src/app/models/change-request-received';

// Mock service
class MockChangeRequestService {
  getChangeRequestsReceived(): ChangeRequestReceived[] {
    return [
      { "roster": "LDZO ACS", "date": "19.09.24", "shift": "N --> N2", "sender": "Petar Perić", "status": "pending" },
      { "roster": "LDZO ACS", "date": "23.09.24", "shift": "J --> P", "sender": "Marko Marić", "status": "pending" }
    ];
  }
}

describe('DashboardChangeRequestsReceivedComponent', () => {
  let component: DashboardChangeRequestsReceivedComponent;
  let fixture: ComponentFixture<DashboardChangeRequestsReceivedComponent>;
  let changeRequestService: ChangeRequestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardChangeRequestsReceivedComponent],
      providers: [
        { provide: ChangeRequestService, useClass: MockChangeRequestService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardChangeRequestsReceivedComponent);
    component = fixture.componentInstance;
    changeRequestService = TestBed.inject(ChangeRequestService);
    fixture.detectChanges(); // triggers ngOnInit()
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load change requests on ngOnInit', () => {
    const mockData: ChangeRequestReceived[] = [
      { "roster": "LDZO ACS", "date": "19.09.24", "shift": "N --> N2", "sender": "Petar Perić", "status": "pending" },
      { "roster": "LDZO ACS", "date": "23.09.24", "shift": "J --> P", "sender": "Marko Marić", "status": "pending" }
    ];

    // Spy on the service method to return the mock data directly
    spyOn(changeRequestService, 'getChangeRequestsReceived').and.returnValue(mockData);

    // Trigger ngOnInit
    component.ngOnInit();

    // Assert that the changeRequests property has been populated correctly
    expect(component.changeRequests).toEqual(mockData);
  });
});
