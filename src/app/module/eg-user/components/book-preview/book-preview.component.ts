import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css']
})
export class BookPreviewComponent implements OnInit {


  book!: Book;
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params : ParamMap) => {
      const book_id = params.get('id');
      
      if (typeof book_id == 'string') {
        let id = parseInt(book_id) 

        this.bookService.getBookById(id).subscribe({
          next: res => {
            this.book = res
          },
          error: err => {
            // handles error
            console.log(err)
          }
        })
      }
    })
  }
  readnow(): void {
    this.router.navigate(['readnow']);
  }

  downloadPdf(url:string, filename:string) {
    this.bookService.downloadFile(url, filename);
    }
  

}
