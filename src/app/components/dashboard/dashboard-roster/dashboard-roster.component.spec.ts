import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardRosterComponent } from './dashboard-roster.component';
import { RosterService } from 'src/app/services/roster.service';
import { Roster } from 'src/app/models/roster.interface';
import { DashboardModule } from '../dashboard.module'; // Importing DashboardModule

// Mock service
class MockRosterService {
  getRoster(): Roster[] {
    return [
      {
        day: 'Monday',
        shift: 'Morning',
        location: 'Location A',
        icon: 'work',
        active: true,
      },
      {
        day: 'Tuesday',
        shift: 'Afternoon',
        location: 'Location B',
        active: false,
      },
    ];
  }
}

describe('DashboardRosterComponent', () => {
  let component: DashboardRosterComponent;
  let fixture: ComponentFixture<DashboardRosterComponent>;
  let rosterService: RosterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardModule], // Add DashboardModule to imports
      providers: [
        { provide: RosterService, useClass: MockRosterService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRosterComponent);
    component = fixture.componentInstance;
    rosterService = TestBed.inject(RosterService);
    fixture.detectChanges(); // triggers ngOnInit()
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load roster data on ngOnInit', () => {
    const mockData: Roster[] = [
      {
        day: 'Monday',
        shift: 'Morning',
        location: 'Location A',
        icon: 'work',
        active: true,
      },
      {
        day: 'Tuesday',
        shift: 'Afternoon',
        location: 'Location B',
        active: false,
      },
    ];

    // Directly test the component's roster property
    component.ngOnInit();
    expect(component.roster).toEqual(mockData);
  });
});
