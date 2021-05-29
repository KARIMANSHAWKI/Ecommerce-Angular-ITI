import { User } from 'src/app/interfaces/user.interface';
import { Good } from './../interfaces/goods.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { Order } from '../interfaces/order.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private fs: AngularFirestore, private authServ: AuthService) {}

  addOrder(items: Good[]) {
    return this.fs.collection('orders/').add({
      userid: this.authServ.userId,
      date: new Date().toString(),
      items,
      state: 'init',
      //todo remove it and deal with null
      adminhide: false,
      userhide: false,
    });
  }

  getOrders() {
    return this.fs.collection<Order>(`orders`).snapshotChanges();
  }
  getAdminOrders() {
    return this.fs
      .collection<Order>(`orders`, (ref) => {
        return ref.where('adminhide', '==', false);
      })
      .snapshotChanges();
  }
  getUserOrders() {
    return this.fs
      .collection<Order>(`orders`, (ref) => {
        return ref
          .where('userid', '==', this.authServ.userId)
          .where('userhide', '==', false);
      })
      .snapshotChanges();
  }

  updateOrder(id: string, data) {
    console.log(
      '🚀 ~ file: order.service.ts ~ line 37 ~ OrderService ~ updateOrder ~ id',
      id
    );
    return this.fs.doc(`orders/${id}`).update({
      ...data,
    });
  }
}
