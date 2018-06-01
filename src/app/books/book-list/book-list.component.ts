import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: any;
  validCreateBook: boolean;
  order: string = 'id';
  reverse: boolean = true;
  deleteStatus: boolean;
  p: number = 1;

  constructor(private bookService: BookService, private orderPipe: OrderPipe) {}

  ngOnInit() {
    this.bookService.bookList()
      .subscribe(books => this.books = this.orderPipe.transform(books,this.order));
  }

  deleteBook(book_id) {
    this.bookService.deleteBook(book_id)
      .subscribe((result : any) => {
        this.deleteStatus = true;
        this.ngOnInit();
      });
  }

}
