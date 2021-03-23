import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product/product.component';

export interface Cart extends Product {
  qty: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  currentCart: Cart[] = [];
  cartSubject$ = new BehaviorSubject<Cart[]>([]);
  // currentCart = this.cartSubject$.asObservable();
  constructor() { }
  addToCart(product: Product) {
    let index = this.currentCart.findIndex(obj => obj.id == product.id);
    if (index >= 0) {
      this.currentCart[index].qty += 1
    }
    else {
      this.currentCart.push(
        {
          ...product,
          qty: 1
        }
      );
    }
    this.cartSubject$.next(this.currentCart);
  }
}
