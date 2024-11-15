import { TestBed } from '@angular/core/testing';
import { ChangeRequestService } from './change-request.service';
import { ChangeRequestReceived } from 'src/app/models/change-request-received';

describe('ChangeRequestService', () => {
  let service: ChangeRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeRequestService);
  });

  // Test 1: Ensure the service is created
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Test 2: Ensure getChangeRequestsSent returns the correct data
  it('should return the correct change requests sent', () => {
    const expectedChangeRequests: ChangeRequestReceived[] = [
      {
        "roster": "LDZO ACS",
        "date": "19.09.24",
        "shift": "N --> N2",
        "sender": "Petar Perić",
        "status": "pending"
      },
      {
        "roster": "LDZO ACS",
        "date": "23.09.24",
        "shift": "J --> P",
        "sender": "Marko Marić",
        "status": "pending"
      },
      {
        "roster": "LDZO ACS",
        "date": "24.09.24",
        "shift": "P --> J",
        "sender": "Tomislav Horvat",
        "status": "rejected"
      }
    ];

    expect(service.getChangeRequestsSent()).toEqual(expectedChangeRequests);
  });

  // Test 3: Ensure getChangeRequestsReceived returns the correct data
  it('should return the correct change requests received', () => {
    const expectedChangeRequests: ChangeRequestReceived[] = [
      {
        "roster": "LDZO ACS",
        "date": "19.09.24",
        "shift": "N --> N2",
        "sender": "Petar Perić",
        "status": "approved"
      },
      {
        "roster": "LDZO ACS",
        "date": "23.09.24",
        "shift": "J --> P",
        "sender": "Marko Marić",
        "status": "pending"
      },
      {
        "roster": "LDZO ACS",
        "date": "24.09.24",
        "shift": "P --> J",
        "sender": "Tomislav Horvat",
        "status": "rejected"
      }
    ];

    expect(service.getChangeRequestsReceived()).toEqual(expectedChangeRequests);
  });
});
