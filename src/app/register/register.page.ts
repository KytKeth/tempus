import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private storage: Storage) {}

  async register() {
    const userData = { username: this.username, email: this.email, password: this.password };
    await this.storage.set(this.username, userData);

    console.log('Usuário registrado com sucesso:', userData);

    this.navCtrl.navigateForward('/login');
  }

  goToLogin() {
  
    this.navCtrl.navigateForward('/login');
  }
}

