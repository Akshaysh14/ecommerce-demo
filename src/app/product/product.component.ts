import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

export interface Product {
  id: number;
  price: number;
  discount: number;
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  products: Product[] = [
    { id: 1, price: 100000, discount: 10, name: 'IPhone', description: 'Get IPhone in best price', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80' },
    { id: 2, price: 37000, discount: 10, name: 'Oppo', description: 'Get best mobile', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcII-_58ZXG_luTxK31P8xgwOb1ndPWKbyw&usqp=CAU' },
    { id: 3, price: 10000, discount: 10, name: 'Vivo', description: 'Get best discount', image: 'https://i.guim.co.uk/img/media/b09d24ed3b058c5e472d5fd2bbf0a9195ecf9147/41_224_5120_3073/master/5120.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=545ab58f20c4279c7e00e03c3e9afbe8' },
    { id: 4, price: 20000, discount: 10, name: 'MI', description: 'Best model in all MI Mobile', image: 'https://static.toiimg.com/thumb/msid-73471864,width-640,resizemode-4/73471864.jpg' },
    { id: 5, price: 23000, discount: 10, name: 'Asus', description: 'Garranty for one year', image: 'https://i.insider.com/5dc9a5383afd37405001d722?width=1136&format=jpeg' }
  ];

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
