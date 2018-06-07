import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject, async } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });
  });

});
