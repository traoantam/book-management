import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  total_books: any;

  constructor(
    private authService: AuthService,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.bookList()
      .subscribe((result : any) => {
        return this.total_books = result;
      });
  }

}
