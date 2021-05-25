import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Good } from '../interfaces/goods.interface';

@Injectable({
  providedIn: 'root',
})
export class GoodsService {
  constructor(private fs: AngularFirestore) {}

  getAllGoods() {
    return this.fs.collection<Good>('goods').snapshotChanges();
  }
}
