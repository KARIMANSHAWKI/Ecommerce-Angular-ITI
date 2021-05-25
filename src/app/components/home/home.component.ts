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
  constructor(private gs: GoodsService) {}

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
    console.log('added', this.goods[index]);
  }
}
