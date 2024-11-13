import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems = [
    { icon: 'dashboard', label: 'Dashboard', route: '/dashboard' },
    { icon: 'folder', label: 'Documents', route: '/documents' },
    { icon: 'people', label: 'Roster', route: '/roster' },
    { icon: 'message', label: 'Messages', route: '/messages' },
    { icon: 'schedule', label: 'Hours', route: '/hours' },
    { icon: 'check_circle', label: 'Ratings', route: '/ratings' },
    { icon: 'training', label: 'Training', route: '/training' },
    { icon: 'warning', label: 'Warnings', route: '/warnings' },
  ];
}