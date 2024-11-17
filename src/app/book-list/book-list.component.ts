import { Component } from '@angular/core';
import { IBook, books } from '../../books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
books: IBook[] = books;
}
