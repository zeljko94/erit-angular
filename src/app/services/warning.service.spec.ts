import { TestBed } from '@angular/core/testing';
import { WarningService } from './warning.service';
import { Warning } from '../models/warning.interface';

describe('WarningService', () => {
  let service: WarningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarningService);
  });

  // Test 1: Ensure the service is created
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Test 2: Ensure getWarnings returns the correct warning data
  it('should return the correct warning data', () => {
    const expectedWarnings: Warning[] = [
      { "icon": "check_circle", "status": "accent", "date": "24.09.2024.", "message": "Minimum rest time" },
      { "icon": "error", "status": "alert", "date": "23.09.2024.", "message": "Minimum hours" },
      { "icon": "error", "status": "alert", "date": "19.09.2024.", "message": "Check time" },
      { "icon": "check_circle", "status": "accent", "date": "17.09.2024.", "message": "Check time" }
    ];

    expect(service.getWarnings()).toEqual(expectedWarnings);
  });
});
