import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'firebase/auth';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any;

  constructor(private afAuth: AngularFireAuth, private storage: Storage) {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      if (user) {

        this.storage.set('user', {
          email: user.email,
          uid: user.uid
        });
      } else {
        this.storage.remove('user');
      }
    });
  }

  async register(email: string, password: string) {
    return await this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  async login(email: string, password: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    await this.afAuth.signOut();
    await this.storage.remove('user'); 
  }

  isAuthenticated(): boolean {
    return this.user !== null;
  }
}

