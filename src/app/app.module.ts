import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestBtnComponent } from './test-btn/test-btn.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestBtnComponent,
    ProductComponent,
    CartComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
