import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardHoursComponent } from './dashboard-hours.component';
import { HoursService } from 'src/app/services/hours.service';
import { Hours } from 'src/app/models/hours.interface';
import { SharedModule } from 'src/app/shared/shared.module';

// Mock service
class MockHoursService {
  getHoursData(): Hours[] {
    return [
      { licenseUnit: 'Unit A', role: 'Pilot', lastWork: '2024-09-01', period: '2024-09-01 - 2024-09-07', hours: '40' },
      { licenseUnit: 'Unit B', role: 'Engineer', lastWork: '2024-09-02', period: '2024-09-02 - 2024-09-08', hours: '38' },
    ];
  }
}

describe('DashboardHoursComponent', () => {
  let component: DashboardHoursComponent;
  let fixture: ComponentFixture<DashboardHoursComponent>;
  let hoursService: HoursService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardHoursComponent],
      imports: [SharedModule],
      providers: [
        { provide: HoursService, useClass: MockHoursService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHoursComponent);
    component = fixture.componentInstance;
    hoursService = TestBed.inject(HoursService);
    fixture.detectChanges(); // triggers ngOnInit()
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load hours data on ngOnInit', () => {
    const mockData: Hours[] = [
      { licenseUnit: 'Unit A', role: 'Pilot', lastWork: '2024-09-01', period: '2024-09-01 - 2024-09-07', hours: '40' },
      { licenseUnit: 'Unit B', role: 'Engineer', lastWork: '2024-09-02', period: '2024-09-02 - 2024-09-08', hours: '38' },
    ];

    // Spy on the service method to return the mock data
    spyOn(hoursService, 'getHoursData').and.returnValue(mockData);

    // Trigger ngOnInit
    component.ngOnInit();

    // Assert that the hours array has been populated correctly
    expect(component.hours).toEqual(mockData);
  });

  it('should toggle collapse state on toggleCollapse call', () => {
    // Initial state should be false
    expect(component.isCollapsed).toBe(false);

    // Call toggleCollapse
    component.toggleCollapse();
    expect(component.isCollapsed).toBe(true);

    // Call toggleCollapse again
    component.toggleCollapse();
    expect(component.isCollapsed).toBe(false);
  });
});
