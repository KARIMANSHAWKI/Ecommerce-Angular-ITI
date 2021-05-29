import { User } from 'src/app/interfaces/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<any>;
  userId: string = '';
  userData: Observable<any>;
  constructor(private afAuth: AngularFireAuth, private fs: AngularFirestore) {
    this.user = afAuth.user;
    this.user.subscribe((result) => {
      this.userId = result?.uid;
      this.userData = this.fs.doc(`users/${this.userId}`).valueChanges();
    });
  }

  signup(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  signin(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.userId = '';
    return this.afAuth.signOut();
  }
}



// import { User } from 'src/app/interfaces/user.interface';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { AngularFirestore } from '@angular/fire/firestore';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   user: Observable<any>;
//   userId: string = '';
//   isAdmin: boolean = false;
//   constructor(private afAuth: AngularFireAuth, private fs: AngularFirestore) {
//     this.user = afAuth.user;
//     this.user.subscribe((result) => {
//       this.userId = result?.uid;
//       this.fs
//         .doc(`users/${this.userId}`)
//         .get()
//         .subscribe((data) => {
//           console.log(
//             '🚀 ~ file: auth.service.ts ~ line 21 ~ AuthService ~ .subscribe ~ data',
//             data.get('isadmin')
//           );
//           this.isAdmin = data.get('isadmin');
//         });
//     });
//   }

//   signup(email: string, password: string) {
//     return this.afAuth.createUserWithEmailAndPassword(email, password);
//   }

//   signin(email: string, password: string) {
//     return this.afAuth.signInWithEmailAndPassword(email, password);
//   }

//   logout() {
//     this.userId = '';
//     return this.afAuth.signOut();
//   }
// }
