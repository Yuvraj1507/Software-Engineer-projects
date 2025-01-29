import { Observable } from '@nativescript/core';
import { authService } from '../../services/auth.service';

export class LoginViewModel extends Observable {
  email: string = '';
  password: string = '';

  constructor() {
    super();
  }

  async onLogin() {
    if (!this.email || !this.password) {
      alert('Please enter email and password');
      return;
    }

    const success = await authService.login(this.email, this.password);
    if (success) {
      // Navigate to home page
      const frame = require('@nativescript/core').Frame;
      frame.topmost().navigate({
        moduleName: 'pages/home/home-page',
        clearHistory: true
      });
    } else {
      alert('Login failed. Please try again.');
    }
  }

  onRegister() {
    const frame = require('@nativescript/core').Frame;
    frame.topmost().navigate('pages/register/register-page');
  }
}