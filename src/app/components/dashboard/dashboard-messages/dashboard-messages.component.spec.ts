import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardMessagesComponent } from './dashboard-messages.component';
import { MessagesService } from 'src/app/services/messages.service';
import { Message } from 'src/app/models/message.interface';
import { SharedModule } from 'src/app/shared/shared.module';

// Mock service
class MockMessagesService {
  getMessages(): Message[] {
    return [
      {
        id: 1,
        status: 'read',
        dateFrom: '2024-09-01',
        dateTo: '2024-09-01',
        messageFrom: 'Admin',
        message: 'Your account has been updated.',
        icon: 'info'
      },
      {
        id: 2,
        status: 'unread',
        dateFrom: '2024-09-02',
        dateTo: '2024-09-02',
        messageFrom: 'Support',
        message: 'New support ticket created.',
        icon: 'support'
      }
    ];
  }
}

describe('DashboardMessagesComponent', () => {
  let component: DashboardMessagesComponent;
  let fixture: ComponentFixture<DashboardMessagesComponent>;
  let messagesService: MessagesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardMessagesComponent],
      imports: [SharedModule],
      providers: [
        { provide: MessagesService, useClass: MockMessagesService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMessagesComponent);
    component = fixture.componentInstance;
    messagesService = TestBed.inject(MessagesService);
    fixture.detectChanges(); // triggers ngOnInit()
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load messages on ngOnInit', () => {
    const mockData: Message[] = [
      {
        id: 1,
        status: 'read',
        dateFrom: '2024-09-01',
        dateTo: '2024-09-01',
        messageFrom: 'Admin',
        message: 'Your account has been updated.',
        icon: 'info'
      },
      {
        id: 2,
        status: 'unread',
        dateFrom: '2024-09-02',
        dateTo: '2024-09-02',
        messageFrom: 'Support',
        message: 'New support ticket created.',
        icon: 'support'
      }
    ];

    // Spy on the service method to return the mock data
    spyOn(messagesService, 'getMessages').and.returnValue(mockData);

    // Trigger ngOnInit
    component.ngOnInit();

    // Assert that the messages array has been populated correctly
    expect(component.messages).toEqual(mockData);
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
