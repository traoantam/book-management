import { MockBackend } from '@angular/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthServiceMock } from '../mocks/auth.service.mock';


describe('AuthService', () => {
  let service: AuthService;
  let backend: MockBackend;
  let data = {
    "email": "traoantam@gmail.com",
    "password": "12345678"
  }
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock}
      ]
    });
  });

  it('should be login', inject([HttpTestingController, AuthService],(httpMock: HttpTestingController, authService: AuthService) => {

    let response = {
      "data": {
          "id": 49,
          "email": "traoantam@gmail.com",
          "provider": "email",
          "uid": "traoantam@gmail.com",
          "name": null,
          "nickname": null,
          "image": null,
          "first_name": "Tam",
          "last_name": "Trao An"
      }
    };
    
    expect(authService.login(data)).toEqual(response);
  }));

  it('should be register', inject([HttpTestingController, AuthService],(httpMock: HttpTestingController, authService: AuthService) => {

    let response = {
      "status": "success",
      "data": {
          "id": 49,
          "email": "traoantam@gmail.com",
          "provider": "email",
          "uid": "traoantam@gmail.com",
          "name": null,
          "nickname": null,
          "image": null,
          "first_name": "Tam",
          "last_name": "Trao An"
      }
    };
    
    expect(authService.register(data)).toEqual(response);
  }));

  it('user should not logged', inject([HttpTestingController, AuthService],(httpMock: HttpTestingController, authService: AuthService) => {
    localStorage.setItem('uid','');
    localStorage.setItem('token','');
    localStorage.setItem('client','');
    let result = authService.isLoggedIn();
    expect(result).toBe(false);
  }));

  it('user should be logged', inject([HttpTestingController, AuthService],(httpMock: HttpTestingController, authService: AuthService) => {
    localStorage.setItem('uid','traoantam@gmail.com');
    localStorage.setItem('token','123123123');
    localStorage.setItem('client','312312312');
    let result = authService.isLoggedIn();
    expect(result).toBe(true);
  }));

  it('should be return current user', inject([HttpTestingController, AuthService],(httpMock: HttpTestingController, authService: AuthService) => {
    let result = authService.currentUser();
    expect(result).toEqual('traoantam@gmail.com');
  }));
  

});
