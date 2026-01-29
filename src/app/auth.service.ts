import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly USER = {
    username: 'admin',
    password: 'admin123'
  };

  isAuthenticated(): boolean {
    return localStorage.getItem('auth') === 'true';
  }

  login(username: string, password: string): boolean {
    if (
      username === this.USER.username &&
      password === this.USER.password
    ) {
      localStorage.setItem('auth', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('auth');
  }
}
