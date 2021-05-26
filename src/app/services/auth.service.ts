import { User } from 'src/app/interfaces/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<any>;
  userId: string = '';
  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.user;
    this.user.subscribe((result) => {
      this.userId = result.uid;
    });
  }

  signup(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  signin(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.afAuth.signOut();
  }
}
