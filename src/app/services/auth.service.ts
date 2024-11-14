import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  roles: string[] = ['User', 'Supervisor', 'Manager', 'Admin', 'Super Admin'];
  user: User = { name: 'Željko', lastName: 'Krnjić', role: 'User' };

  constructor() { }

  getName(): string {
    return `${this.user.name} ${this.user.lastName}`;
  }


  getRole(): string {
    return this.user.role;
  }

  setRole(role: string): void {
    this.user.role = role;
  }


  getRoles(): string[] {
    return this.roles;
  }
}
