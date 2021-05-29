import { GoodsService } from './../../services/goods.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Good } from 'src/app/interfaces/goods.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css'],
})
export class GoodsComponent implements OnInit {
  @ViewChild('image')
  image!: ElementRef;
  constructor(private goodSer: GoodsService, private router: Router) {}

  ngOnInit(): void {}

  addNewGood(form: NgForm) {
    let name = (<Good>form.value).name;
    let price = (<Good>form.value).price;
    let image = (<HTMLInputElement>this.image.nativeElement).files[0];
    this.goodSer.addNewGood(name, price, image);
    this.router.navigate(['/']);
  }
}
