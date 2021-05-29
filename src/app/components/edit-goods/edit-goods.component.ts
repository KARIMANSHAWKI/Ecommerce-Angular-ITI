import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Good } from 'src/app/interfaces/goods.interface';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-edit-goods',
  templateUrl: './edit-goods.component.html',
  styleUrls: ['./edit-goods.component.css'],
})
export class EditGoodsComponent implements OnInit {
  goods: Good[] = [];
  goodObservable: Subscription | undefined;

  constructor(private goodSer: GoodsService, private router: Router) {}

  ngOnInit(): void {
    this.goodObservable = this.goodSer.getAllGoods().subscribe((data) => {
      this.goods = data.map((element) => {
        return <Good>{
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        };
      });
    });
  }

  ngOnDestroy(): void {
    this.goodObservable?.unsubscribe();
  }

  editGood(form: NgForm, i: number): void {
    let name = (<Good>form.value).name;
    console.log("🚀 ~ file: edit-goods.component.ts ~ line 36 ~ EditGoodsComponent ~ editGood ~ name", name)
    let price = (<Good>form.value).price;
    console.log("🚀 ~ file: edit-goods.component.ts ~ line 38 ~ EditGoodsComponent ~ editGood ~ price", price)
    this.goodSer.editGood(this.goods[i].id, { name, price });
    this.router.navigate(['/admin/edit-goods']);
  }
}
