import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class BookService {

  readonly rootUrl = 'https://bm-fe.herokuapp.com';
  constructor(private http: HttpClient, private router: Router) {
    
  }

  headerToken() {
    let headers = new HttpHeaders();
    headers = headers.append('Access-Token', localStorage.getItem('token'));
    headers = headers.append('Uid', localStorage.getItem('uid'));
    headers = headers.append('Client', localStorage.getItem('client'));
    return headers;
  }

  createBook(credentials) {
    let data = {
      "book": {
        "title": credentials.title,
        "description": credentials.description,
        "author": credentials.author
      }
    }
    let headers = this.headerToken();
    return this.http.post(this.rootUrl+'/books', 
      data, { headers: headers })
      .map(response => {
        return response;
      });
  }

  bookList() {
    let headers = this.headerToken();
    return this.http.get(this.rootUrl+'/books', { headers: headers })
      .map(response => {
        return response;
      });
  }

  bookById(book_id) {
    let headers = this.headerToken();
    return this.http.get(this.rootUrl+'/books/'+book_id, { headers: headers })
      .map(response => {
        return response;
      });
  }

  updateBook(credentials, book_id
  ) {
    let data = {
      "book": {
        "title": credentials.title,
        "description": credentials.description,
        "author": credentials.author
      }
    }

    let headers = this.headerToken();
    return this.http.patch(this.rootUrl+'/books/'+book_id, 
      data, { headers: headers })
      .map((response:any) => {
        return response;
      });

  }

  deleteBook(book_id) {
    let headers = this.headerToken();
    return this.http.delete(this.rootUrl+'/books/'+book_id, { headers: headers, observe: "response" })
      .map((response:any) => {
        return response;
      });
  }

}
