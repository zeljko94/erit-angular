import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DashboardChangeRequestsReceivedComponent } from './dashboard-change-requests-received.component';
import { ChangeRequestService } from 'src/app/services/change-request.service';
import { ChangeRequestReceived } from 'src/app/models/change-request-received';

describe('DashboardChangeRequestsReceivedComponent', () => {
  let component: DashboardChangeRequestsReceivedComponent;
  let fixture: ComponentFixture<DashboardChangeRequestsReceivedComponent>;
  let changeRequestService: jasmine.SpyObj<ChangeRequestService>;

  const mockChangeRequests: ChangeRequestReceived[] = [
    { roster: 'Unit A', date: '2024-11-12', shift: 'Developer', sender: 'John Doe', status: 'pending' },
    { roster: 'Unit B', date: '2024-11-05', shift: 'Manager', sender: 'Jane Smith', status: 'approved' },
  ];

  beforeEach(async () => {
    // Create a mock for ChangeRequestService
    const changeRequestServiceSpy = jasmine.createSpyObj('ChangeRequestService', ['getChangeRequestsReceived']);

    await TestBed.configureTestingModule({
      declarations: [DashboardChangeRequestsReceivedComponent],
      providers: [
        { provide: ChangeRequestService, useValue: changeRequestServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardChangeRequestsReceivedComponent);
    component = fixture.componentInstance;
    changeRequestService = TestBed.inject(ChangeRequestService) as jasmine.SpyObj<ChangeRequestService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load change requests on initialization', () => {
    // Arrange
    changeRequestService.getChangeRequestsReceived.and.returnValue(of(mockChangeRequests));

    // Act
    fixture.detectChanges(); // triggers ngOnInit

    // Assert
    expect(component.changeRequests).toEqual(mockChangeRequests);
    expect(changeRequestService.getChangeRequestsReceived).toHaveBeenCalled();
  });

  it('should call loadChangeRequests method and update changeRequests', () => {
    // Arrange
    changeRequestService.getChangeRequestsReceived.and.returnValue(of(mockChangeRequests));

    // Act
    component.loadChangeRequests();

    // Assert
    expect(component.changeRequests).toEqual(mockChangeRequests);
    expect(changeRequestService.getChangeRequestsReceived).toHaveBeenCalledTimes(1);
  });
});
