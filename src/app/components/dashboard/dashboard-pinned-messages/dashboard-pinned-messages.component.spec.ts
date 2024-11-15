import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardPinnedMessagesComponent } from './dashboard-pinned-messages.component';
import { MessagesService } from 'src/app/services/messages.service';
import { PinnedMessage } from 'src/app/models/pinned-message.interface';
import { DashboardModule } from '../dashboard.module'; // Importing DashboardModule

// Mock service
class MockMessagesService {
  getPinnedMessages(): PinnedMessage[] {
    return [
      {
        icon: 'info',
        status: ['read'],
        datetime: ['2024-09-01'],
        text: 'Your profile has been updated.',
        buttons: ['View'],
        messageFrom: 'Admin',
      },
      {
        icon: 'alert',
        status: ['unread'],
        datetime: ['2024-09-02'],
        text: 'New support request received.',
        buttons: ['Reply'],
        messageFrom: 'Support',
      },
    ];
  }
}

describe('DashboardPinnedMessagesComponent', () => {
  let component: DashboardPinnedMessagesComponent;
  let fixture: ComponentFixture<DashboardPinnedMessagesComponent>;
  let messagesService: MessagesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardModule],
      providers: [
        { provide: MessagesService, useClass: MockMessagesService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPinnedMessagesComponent);
    component = fixture.componentInstance;
    messagesService = TestBed.inject(MessagesService);
    fixture.detectChanges(); // triggers ngOnInit()
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load pinned messages on ngOnInit', () => {
    const mockData: PinnedMessage[] = [
      {
        icon: 'info',
        status: ['read'],
        datetime: ['2024-09-01'],
        text: 'Your profile has been updated.',
        buttons: ['View'],
        messageFrom: 'Admin',
      },
      {
        icon: 'alert',
        status: ['unread'],
        datetime: ['2024-09-02'],
        text: 'New support request received.',
        buttons: ['Reply'],
        messageFrom: 'Support',
      },
    ];

    // Directly test the component's messages property
    component.ngOnInit();
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
