import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IBook } from '../../books';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cart: IBook[] = [];
  totalAmount = 0;

  checkOut = new FormGroup({
    fullName: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
    this.updateTotalAmount();
  }

  checkOutFunction() {
    const fullName = this.checkOut.get('fullName')?.value;
    const address = this.checkOut.get('address')?.value;

    console.log(
      `name: ${fullName}, address: ${address}, total price: ${this.totalAmount}`
    );

    this.checkOut.reset();
    this.cart = this.cartService.clearCart();
    alert('Your order is successfully submitted!');
    // this.updateTotalAmount();
  }
  updateTotalAmount() {
    console.log(this.cart);

    this.totalAmount = this.cartService.getTotalAmount();
    console.log(this.totalAmount);
  }

  increaseQuantity(item: IBook) {
    this.cartService.increaseQuantity(item);
    this.updateTotalAmount();
  }

  decreaseQuantity(item: IBook) {
    this.cartService.decreaseQuantity(item);
    this.updateTotalAmount();
  }

  removeItem(item: IBook) {
    this.cartService.removeItem(item);
    this.updateTotalAmount();
    this.cart = this.cartService.getCart();
  }
}
