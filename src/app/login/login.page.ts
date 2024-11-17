import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService,private router: Router) {}

  async onLogin() {
    await this.authService.login(this.email, this.password);
  }

  goToRegister() {
    this.router.navigate(['/register']); 
  }
}






