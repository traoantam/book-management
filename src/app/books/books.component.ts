import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  validCreateBook: boolean;
  book_input: any;
  book_id: string;

  constructor(
    private route: ActivatedRoute, 
    private bookService: BookService,
    private router: Router) {
    this.book_input = {
      "title": "",
      "author": "",
      "description": "",
    };
    this.book_id = this.route.snapshot.params.id;
  }

  ngOnInit() {
    if (this.book_id) {
      this.bookService.bookById(this.book_id)
      .subscribe((result : any) => {
        return this.book_input = result;
      });
    } 
  }

  createBook(credentials) {
    if (!this.book_id) {
      this.bookService.createBook(credentials)
      .subscribe((result : any)=>{
          this.validCreateBook = true;
          setTimeout(() => {
            this.router.navigate(['/book-list']);
          }, 1500);
      });
    }else {
      this.bookService.updateBook(credentials, this.book_id)
      .subscribe((result : any)=>{
          this.validCreateBook = true;
          setTimeout(() => {
            this.router.navigate(['/book-list']);
          }, 1500);
      });
    }
  }



}
