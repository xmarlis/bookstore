import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IBook, books } from '../../books';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css',
})
export class BookDetailsComponent {
  book: IBook = {} as IBook;
  index: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    this.route.params.subscribe((params: Params) => {
      this.index = params['id'];
      this.book = books[this.index];
    });
  }

  addToCart() {
    // alert('Book added successfully!');
    this.cartService.addToCart(this.book);
  }
}
