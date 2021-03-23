import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart : Cart[] = [];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.cartSubject$.subscribe(next => {
      this.cart = next;
    })
  }

}