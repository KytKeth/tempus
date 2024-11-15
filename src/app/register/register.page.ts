import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.email, this.password, this.username).then(
      () => {
        this.router.navigate(['/inicio']); 
      },
      (error) => {
        console.error('Erro ao registrar:', error);
      }
    );
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}