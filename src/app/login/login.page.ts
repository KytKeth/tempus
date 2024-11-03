import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username!: string;
  password!: string;

  constructor(private navCtrl: NavController, private storage: Storage) {}

  async login() {
    const storedUser = await this.storage.get(this.username);

    if (storedUser && storedUser.password === this.password) {
      console.log('Login bem-sucedido');
      this.navCtrl.navigateForward('/inicio');
    } else {
      alert('Credenciais inválidas');
    }
  }
}

