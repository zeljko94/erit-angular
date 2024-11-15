import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { User } from '../models/user.interface';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return full name when getName is called', () => {
    // Arrange
    const expectedName = 'Željko Krnjić';

    // Act
    const result = service.getName();

    // Assert
    expect(result).toBe(expectedName);
  });

  it('should return user role when getRole is called', () => {
    // Arrange
    const expectedRole = 'User';

    // Act
    const result = service.getRole();

    // Assert
    expect(result).toBe(expectedRole);
  });

  it('should set user role correctly when setRole is called', () => {
    // Arrange
    const newRole = 'Manager';
    const expectedUser: User = { name: 'Željko', lastName: 'Krnjić', role: newRole };

    // Act
    service.setRole(newRole);

    // Assert
    expect(service.user.role).toBe(newRole);
    expect(service.user).toEqual(expectedUser);
  });

  it('should return all available roles when getRoles is called', () => {
    // Arrange
    const expectedRoles = ['User', 'Supervisor', 'Manager', 'Admin', 'Super Admin'];

    // Act
    const result = service.getRoles();

    // Assert
    expect(result).toEqual(expectedRoles);
  });
});
