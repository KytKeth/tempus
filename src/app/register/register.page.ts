import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  username: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async register() {
    if (!this.isValidEmail(this.email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    try {
      await this.authService.register(this.email, this.password);
      this.router.navigateByUrl('/inicio');
    } catch (error) {
      console.error('Erro de registro:', error);
      alert('Erro de registro: ' + error);
    }
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }
}



