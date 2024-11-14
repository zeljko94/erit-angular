import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Notification } from 'src/app/models/notification.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  roles: string[] = this.authService.getRoles();
  selectedRole: string = this.authService.getRole();
  
  notifications: Notification[] = []; // Initialize notifications with the Notification type

  constructor(public authService: AuthService) {
    this.loadNotifications();
  }

  onRoleChange(newRole: string): void {
    this.authService.setRole(newRole);
    this.selectedRole = newRole; 
  }

  loadNotifications(): void {
    this.notifications = [
      {
        title: 'Important message',
        message: 'Tomislav Horvat sent a message',
        icon: 'priority_high',
        time: '10:01',
        category: 'Today'
      },
      {
        title: 'Changes in hours',
        message: '',
        icon: 'schedule',
        time: '11:22',
        category: 'Today'
      },
      {
        title: 'Good to know message',
        message: 'Marko Markić sent a message',
        icon: 'info',
        time: '12:35',
        category: 'Earlier'
      },
      {
        title: 'Shift change - Accepted',
        message: '',
        icon: 'check_circle',
        time: '14:10',
        category: 'Earlier'
      },
      {
        title: 'Rating expires soon',
        message: '',
        icon: 'hourglass_empty',
        time: '11:30 on 02.09.2024',
        category: 'Earlier'
      }
    ];
  }
}
