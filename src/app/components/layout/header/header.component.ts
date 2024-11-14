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

  constructor(public authService: AuthService) {}

  
  onRoleChange(newRole: string): void {
    this.authService.setRole(newRole);
    this.selectedRole = newRole; 
  }
}
