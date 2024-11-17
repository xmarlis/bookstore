import { Injectable } from '@angular/core';
import { IBook } from '../../books';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: IBook[] = [];

  constructor() {}

  addToCart(book: IBook): void {
    // this.cart.push(book);
    const existingBook = this.cart.find((item) => item.title === book.title);
    if (existingBook) {
      existingBook.quantity = (existingBook.quantity || 1) + 1;
    } else {
      this.cart.push({ ...book, quantity: 1 });
    }
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }

  getLengthOfCart() {
    return this.cart.length;
  }

  getTotalAmount(): number {
    let total = 0;
    for (let item of this.cart) {
      total += item.price * (item.quantity || 1);
    }
    return total;
  }

  increaseQuantity(item: IBook) {
    if (item.quantity) {
      item.quantity += 1;
    } else {
      item.quantity = 1;
    }
  }

  decreaseQuantity(item: IBook) {
    if (item.quantity && item.quantity > 1) {
      item.quantity -= 1;
    }
  }

  removeItem(item: IBook) {
    const index = this.cart.indexOf(item);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
}
