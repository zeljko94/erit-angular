import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardWarningsComponent } from './dashboard-warnings.component';
import { WarningService } from 'src/app/services/warning.service';
import { Warning } from '../../../models/warning.interface';
import { DashboardModule } from '../dashboard.module'; // Importing the DashboardModule

// Mock service
class MockWarningService {
  getWarnings(): Warning[] {
    return [
      { "icon": "check_circle", "status": "accent", "date": "24.09.2024.", "message": "Minimum rest time" },
      { "icon": "error", "status": "alert", "date": "23.09.2024.", "message": "Minimum hours" },
      { "icon": "error", "status": "alert", "date": "19.09.2024.", "message": "Check time" },
      { "icon": "check_circle", "status": "accent", "date": "17.09.2024.", "message": "Check time" }
    ];
  }
}

describe('DashboardWarningsComponent', () => {
  let component: DashboardWarningsComponent;
  let fixture: ComponentFixture<DashboardWarningsComponent>;
  let warningService: WarningService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardModule], // Importing DashboardModule here
      providers: [
        { provide: WarningService, useClass: MockWarningService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWarningsComponent);
    component = fixture.componentInstance;
    warningService = TestBed.inject(WarningService);
    fixture.detectChanges(); // triggers ngOnInit()
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load warnings on ngOnInit', () => {
    const mockData: Warning[] = [
      { "icon": "check_circle", "status": "accent", "date": "24.09.2024.", "message": "Minimum rest time" },
      { "icon": "error", "status": "alert", "date": "23.09.2024.", "message": "Minimum hours" },
      { "icon": "error", "status": "alert", "date": "19.09.2024.", "message": "Check time" },
      { "icon": "check_circle", "status": "accent", "date": "17.09.2024.", "message": "Check time" }
    ];

    // Directly test the component's warnings property
    component.ngOnInit();
    expect(component.warnings).toEqual(mockData);
  });
});
