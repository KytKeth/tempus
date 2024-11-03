import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string | undefined;
  password!: string;

  constructor(private navCtrl: NavController) {}

  login() {
    if (this.username === 'user' && this.password === 'password') {
      this.navCtrl.navigateForward('/home');
    } else {
      alert('Credenciais inválidas');
    }
  }
}

