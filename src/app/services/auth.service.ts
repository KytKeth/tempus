import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

 
  async register(email: string, password: string): Promise<void> {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);

     
      if (userCredential.user) {
        await userCredential.user.sendEmailVerification();
        alert('Email de verificação enviado. Verifique sua caixa de entrada antes de fazer login.');
      }
      this.router.navigate(['/login']); 
    } catch (error: any) {
      console.error('Erro ao registrar:', error.message);
      alert('Erro ao registrar: ' + error.message);
    }
  }


  async login(email: string, password: string): Promise<void> {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);

      if (userCredential.user?.emailVerified) {
        this.router.navigate(['/inicio']); 
      } else {
        alert('Por favor, verifique seu email antes de acessar.');
        this.afAuth.signOut(); 
      }
    } catch (error: any) {
      console.error('Erro no login:', error.message);
      alert('Erro no login: ' + error.message);
    }
  }
}


