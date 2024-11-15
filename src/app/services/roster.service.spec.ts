import { TestBed } from '@angular/core/testing';
import { RosterService } from './roster.service';
import { Roster } from '../models/roster.interface';

describe('RosterService', () => {
  let service: RosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosterService);
  });

  // Test 1: Ensure the service is created
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Test 2: Ensure getRoster returns the correct roster data
  it('should return the correct roster data', () => {
    const expectedRoster: Roster[] = [
      {
        "day": "Sun 15.09.",
        "shift": "J",
        "location": "Oblasna",
        "icon": "menu",
        "active": true
      },
      {
        "day": "Mon 16.09.",
        "shift": "P",
        "location": "Prilaz",
        "icon": "menu",
        "active": false
      },
      {
        "day": "Tue 17.09.",
        "shift": "N",
        "location": "",
        "icon": "",
        "active": false
      },
      {
        "day": "Wed 18.09.",
        "shift": "N2",
        "location": "",
        "icon": "",
        "active": false
      },
      {
        "day": "Thu 19.09.",
        "shift": "J",
        "location": "",
        "icon": "school",
        "active": false
      }
    ];

    expect(service.getRoster()).toEqual(expectedRoster);
  });
});
