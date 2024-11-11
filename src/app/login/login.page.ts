import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  username: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  async login() {

    if (!this.isValidEmail(this.email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    try {
      await this.authService.login(this.email, this.password);
      this.router.navigateByUrl('/inicio');
    } catch (error) {
      console.error('Erro de login:', error);
      alert('Erro de login: ' + error);
    }
  }
}




