import { TestBed } from '@angular/core/testing';
import { HoursService } from './hours.service';
import { Hours } from 'src/app/models/hours.interface';

describe('HoursService', () => {
  let service: HoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoursService);
  });

  // Test 1: Ensure the service is created
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Test 2: Ensure getHoursData returns the correct data
  it('should return the correct hours data', () => {
    const expectedHoursData: Hours[] = [
      {
        "licenseUnit": "ACS_LDZO",
        "role": "ACC",
        "lastWork": "14.09.2024.",
        "period": "02.09. - 01.12.",
        "hours": "27:32"
      },
      {
        "licenseUnit": "ACS_LDZO",
        "role": "TMA_ZAG",
        "lastWork": "17.09.2024.",
        "period": "05.03. - 04.07.",
        "hours": "15:32"
      },
      {
        "licenseUnit": "ACS_LDZO",
        "role": "TMA_ZAG",
        "lastWork": "17.09.2024.",
        "period": "05.03. - 04.07.",
        "hours": "15:32"
      }
    ];

    expect(service.getHoursData()).toEqual(expectedHoursData);
  });
});
