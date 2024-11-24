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

  constructor(private authService: AuthService,private router: Router) {}

  async onRegister() {
    await this.authService.register(this.email, this.password);
  }
  goToLogin() {
    this.router.navigate(['/login']); 
  }
}

