import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  async login() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    this.afAuth
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        loading.dismiss();
        this.router.navigate(['/inicio']);
      })
      .catch(async (err) => {
        loading.dismiss();
        const alert = await this.alertCtrl.create({
          header: 'Erro',
          message: err.message,
          buttons: ['OK'],
        });
        await alert.present();
      });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}





