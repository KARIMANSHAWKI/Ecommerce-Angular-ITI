import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Good } from '../interfaces/goods.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private fs: AngularFirestore, private authServ: AuthService) {}

  addToCart(data: any) {
    return this.fs.collection(`users/${this.authServ.userId}/cart`).add(data);
  }

  getCartItems() {
    return this.fs
      .collection<Good>(`users/${this.authServ.userId}/cart`)
      .snapshotChanges();
  }

  saveItem(id: string | undefined, amount: number | undefined) {
    return this.fs.doc(`users/${this.authServ.userId}/cart/${id}`).update({
      amount,
    });
  }

  deleteItem(id: string | undefined) {
    return this.fs.doc(`users/${this.authServ.userId}/cart/${id}`).delete();
  }
}
