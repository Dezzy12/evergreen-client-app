import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  books!: Book[];
  
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.fetchBooks();
  }
  
  fetchBooks(): void {
    this.bookService.getBooks().
    subscribe((books: Book[]) => {
      this.books = books;
    });

  }
}