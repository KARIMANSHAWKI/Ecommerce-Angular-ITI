import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css'],
})
export class UserOrdersComponent implements OnInit {
  constructor(private orderSer: OrderService) {}

  orders: Order[];
  ngOnInit(): void {
    this.orderSer.getUserOrders().subscribe((data) => {
      this.orders = data.map((element) => {
        return <Order>{
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        };
      });
      console.log(this.orders);
    });
  }
  moveToHistory(index: number) {
    this.orderSer.updateOrder(this.orders[index].id, {
      userhide: true,
    });
  }
}
