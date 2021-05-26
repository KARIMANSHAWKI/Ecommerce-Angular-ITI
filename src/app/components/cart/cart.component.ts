import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/interfaces/goods.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartSer: CartService) {}
  cartItems!: Good[];

  ngOnInit(): void {
    this.cartSer.getCartItems().subscribe((data) => {
      this.cartItems = data.map((element) => {
        return <Good>{
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        };
      });
    });
  }
  save(i: number) {
    this.cartSer.saveItem(this.cartItems[i].id, this.cartItems[i].amount);
  }
  delete(i: number) {
    this.cartSer.deleteItem(this.cartItems[i].id);
  }
}
