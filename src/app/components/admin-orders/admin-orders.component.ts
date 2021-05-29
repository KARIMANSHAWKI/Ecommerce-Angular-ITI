import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
})
export class AdminOrdersComponent implements OnInit {
  constructor(private orderSer: OrderService) {}

  orders: Order[];
  ngOnInit(): void {
    this.orderSer.getAdminOrders().subscribe((data) => {
      this.orders = data.map((element) => {
        return <Order>{
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        };
      });
      console.log(this.orders);
    });
  }

  // toggleOn() {
  //   $('#toggle-trigger').bootstrapToggle('on');
  // }
  // toggleOff() {
  //   $('#toggle-trigger').bootstrapToggle('off');
  // }

  alterState(index: number, state: string) {
    this.orderSer.updateOrder(this.orders[index].id, { state });
  }
  moveToHistory(index: number) {
    this.orderSer.updateOrder(this.orders[index].id, {
      adminhide: true,
    });
  }
}
