import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/interfaces/goods.interface';
import { GoodsService } from '../../services/goods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  goods: Good[]=[]

  constructor(private gs:GoodsService) {
    
   }

  ngOnInit(): void {
    // this.gs.getAllGoods().subscribe(data => this.goods = data)
    
    
  }

  addToCart(index:number){
    console.log("added", this.goods[index]);
    
  }

}
