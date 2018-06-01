import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book_id: string;
  book_detail: any;

  constructor(private route: ActivatedRoute, private bookService: BookService) {
    this.book_id = this.route.snapshot.params.id;
    this.book_detail = {
      "title": "",
      "author": "",
      "description": "",
    }
  }

  ngOnInit() {
    this.bookService.bookById(this.book_id)
      .subscribe((result : any) => {
        return this.book_detail = result;
      });
  }

}
