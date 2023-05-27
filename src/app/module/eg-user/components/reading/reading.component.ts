import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {

  book_id!: any;
  book!: Book;
 

  constructor(
   private activatedRoute: ActivatedRoute,
   private router: Router,
   private bookService: BookService,
   private location : Location,
  ) { 
    this.book_id = this.router.getCurrentNavigation()?.extras.state;
    
  }

  ngOnInit(): void {
    // this.book_id=history.state;
    
    let id = history.state;
    // console.log(this.book_id);
    // const id = (this.location.getState());

   
    this.bookService.getBookById(id.book_id).subscribe({
      next: res =>{
        this.book = res;
        console.log(res);
      },
      error: err =>{
        console.log(err);
      }
      
    })
  }
  

}
