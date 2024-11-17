import { Component, DoCheck } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements DoCheck {
  title: string = 'Bookstore';

  length: number = 0;

  constructor(private cartService: CartService) {}

  ngDoCheck(): void {
    this.length = this.cartService.getLengthOfCart();
  }
}
