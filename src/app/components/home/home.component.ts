import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Good } from 'src/app/interfaces/goods.interface';
import { GoodsService } from '../../services/goods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  goods: Good[] = [];
  goodObservable: Subscription | undefined;
  ObendAddIndex: number = -1;
  ObendAddAmount: number | undefined;
  constructor(private gs: GoodsService, private cartSer: CartService) {}

  ngOnInit(): void {
    // this.gs.getAllGoods().subscribe((data: Good[]) => this.goods = data)
    this.goodObservable = this.gs.getAllGoods().subscribe((data) => {
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

  addToCart(index: number) {
    this.ObendAddIndex = index;
  }

  buy() {
    let selectedGood = this.goods[this.ObendAddIndex];
    let data = {
      name: selectedGood.name,
      amount: +(this.ObendAddAmount || 0),
      price: selectedGood.price,
    };
    this.cartSer.addToCart(data);
  }
}
