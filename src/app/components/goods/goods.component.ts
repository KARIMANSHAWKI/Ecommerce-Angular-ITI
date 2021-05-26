import { GoodsService } from './../../services/goods.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Good } from 'src/app/interfaces/goods.interface';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css'],
})
export class GoodsComponent implements OnInit {
  @ViewChild('image')
  image!: ElementRef;
  constructor(private goodSer: GoodsService) {}

  ngOnInit(): void {}

  addNewGood(form: NgForm) {
    let name = (<Good>form.value).name;
    let price = (<Good>form.value).price;
    let image = (<HTMLInputElement>this.image.nativeElement).files[0];
    console.log(
      '🚀 ~ file: goods.component.ts ~ line 20 ~ GoodsComponent ~ addNewGood ~ image',
      image
    );
    this.goodSer.addNewGood(name, price, image);
  }
}
