import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  async register() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    this.afAuth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        loading.dismiss();
        this.router.navigate(['/login']);
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

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
