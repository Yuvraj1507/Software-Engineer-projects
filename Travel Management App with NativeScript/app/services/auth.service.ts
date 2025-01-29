import { Observable, Subject } from '@nativescript/core';
import { User, AuthToken } from '../models/user.model';

class AuthService extends Observable {
  private static instance: AuthService;
  private currentUser: User | null = null;
  private authToken: AuthToken | null = null;

  private constructor() {
    super();
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      // Simulate API call
      if (email && password) {
        this.currentUser = {
          id: '1',
          email,
          name: 'Test User'
        };
        this.authToken = {
          token: 'dummy-token',
          expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
        };
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }

  async register(email: string, password: string, name: string): Promise<boolean> {
    try {
      // Simulate API call
      if (email && password && name) {
        this.currentUser = {
          id: '1',
          email,
          name
        };
        return true;
      }
      return false;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  }

  logout(): void {
    this.currentUser = null;
    this.authToken = null;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser && !!this.authToken;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}

export const authService = AuthService.getInstance();