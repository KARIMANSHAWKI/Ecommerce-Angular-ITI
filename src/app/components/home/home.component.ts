import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/interfaces/goods.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  goods: Good[] = [
     {name:'screen', price:2000, photoUrl:'assets/1.jpg'},
     {name:'keyboard', price:2400, photoUrl:'assets/2.jpg'},
     {name:'mouse', price:3200, photoUrl:'assets/3.jpg'},
     {name:'head Phone', price:2800, photoUrl:'assets/4.jpg'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(index:number){
    console.log("added", this.goods[index]);
    
  }

}
