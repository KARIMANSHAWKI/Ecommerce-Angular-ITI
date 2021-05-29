import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Good } from '../interfaces/goods.interface';

@Injectable({
  providedIn: 'root',
})
export class GoodsService {
  constructor(
    private fs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  getAllGoods() {
    return this.fs.collection<Good>('goods').snapshotChanges();
  }

  addNewGood(
    name: string | undefined,
    price: number | undefined,
    image: File | undefined
  ) {
    return new Promise((resolve, reject) => {
      let ref = this.storage.ref('goods/' + image?.name);
      ref.put(image).then(() => {
        ref.getDownloadURL().subscribe((photoUrl) => {
          this.fs
            .collection('goods/')
            .add({
              name,
              price,
              photoUrl,
            })
            .then(() => resolve(true));
        });
      });
    });
  }

  editGood(id, data) {
  console.log("🚀 ~ file: goods.service.ts ~ line 42 ~ GoodsService ~ editGood ~ id", id)
  console.log("🚀 ~ file: goods.service.ts ~ line 42 ~ GoodsService ~ editGood ~ data", data)
    
    return this.fs.doc(`goods/${id}`).update({
      ...data,
    });
  }
}
