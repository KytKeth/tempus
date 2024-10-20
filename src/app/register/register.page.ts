import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  register() {
    // Simular o registro do usuário
    console.log('Usuário registrado com sucesso:', this.username, this.email);

    // Redireciona para a tela de login após o registro
    this.navCtrl.navigateForward('/login');
  }

  goToLogin() {
    // Navega de volta para a tela de login
    this.navCtrl.navigateForward('/login');
  }
}

