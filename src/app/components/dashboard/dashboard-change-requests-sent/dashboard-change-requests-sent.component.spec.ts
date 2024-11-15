import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardChangeRequestsSentComponent } from './dashboard-change-requests-sent.component';
import { ChangeRequestService } from 'src/app/services/change-request.service';
import { ChangeRequestReceived } from 'src/app/models/change-request-received';

// Mock service
class MockChangeRequestService {
  getChangeRequestsSent(): ChangeRequestReceived[] {
    return [
      { "roster": "LDZO ACS", "date": "19.09.24", "shift": "N --> N2", "sender": "Petar Perić", "status": "approved" },
      { "roster": "LDZO ACS", "date": "23.09.24", "shift": "J --> P", "sender": "Marko Marić", "status": "pending" }
    ];
  }
}

describe('DashboardChangeRequestsSentComponent', () => {
  let component: DashboardChangeRequestsSentComponent;
  let fixture: ComponentFixture<DashboardChangeRequestsSentComponent>;
  let changeRequestService: ChangeRequestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardChangeRequestsSentComponent],
      providers: [
        { provide: ChangeRequestService, useClass: MockChangeRequestService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardChangeRequestsSentComponent);
    component = fixture.componentInstance;
    changeRequestService = TestBed.inject(ChangeRequestService);
    fixture.detectChanges(); // triggers ngOnInit
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load change requests on ngOnInit', () => {
    const mockData: ChangeRequestReceived[] = [
      { "roster": "LDZO ACS", "date": "19.09.24", "shift": "N --> N2", "sender": "Petar Perić", "status": "approved" },
      { "roster": "LDZO ACS", "date": "23.09.24", "shift": "J --> P", "sender": "Marko Marić", "status": "pending" }
    ];

    // Spy on the service method to return the mock data
    spyOn(changeRequestService, 'getChangeRequestsSent').and.returnValue(mockData);

    // Trigger ngOnInit
    component.ngOnInit();

    // Assert that the changeRequests property has been populated correctly
    expect(component.changeRequests).toEqual(mockData);
  });
});
