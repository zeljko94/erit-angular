import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  roles: string[] = this.authService.getRoles();
  selectedRole: string = this.authService.getRole();
  notifications: string[] = []; // Initialize the notifications array

  constructor(public authService: AuthService) {
    this.loadNotifications();
  }

  onRoleChange(newRole: string): void {
    this.authService.setRole(newRole);
    this.selectedRole = newRole; 
  }

  loadNotifications(): void {
    this.notifications = [
      'New message from Admin',
      'Your schedule has been updated',
      'Reminder: Meeting at 3 PM'
    ];
  }
}
