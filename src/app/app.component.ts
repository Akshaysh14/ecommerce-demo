import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'component-communication';
  // public name = "Akshay";
  // public message = "";

  cart = [];
  constructor(private cartService:CartService) {

  }
  ngOnInit(): void {
    this.cartService.cartSubject$.subscribe(next => {
      this.cart = next;
    });
  }
}
