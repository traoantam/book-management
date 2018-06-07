import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth-guard.service';
import { Router } from '@angular/router';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, {provider:Router}]
    });
  });

});
