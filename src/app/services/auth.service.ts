import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  
  readonly rootUrl = 'http://bm-fe.herokuapp.com';
  constructor(private http: HttpClient, private router: Router) { }

  login(credentials) { 
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(this.rootUrl+'/auth/sign_in', 
      JSON.stringify(credentials), { headers: headers, observe: "response" })
      .map(response => {
        return response;
      });
  }

  register(credentials) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(this.rootUrl+'/auth', 
      JSON.stringify(credentials), { headers: headers, observe: "response" })
      .map(response => {
        return response;
      });
  }

  removeLocalToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('uid');
    localStorage.removeItem('client');
  }

  checkValidateToken() {
    if(!localStorage.getItem('token') && !localStorage.getItem('uid') && !localStorage.getItem('client'))
      return false;
    return true;
  }

  headerToken() {
    let headers = new HttpHeaders();
    headers = headers.append('Access-Token', localStorage.getItem('token'));
    headers = headers.append('Uid', localStorage.getItem('uid'));
    headers = headers.append('Client', localStorage.getItem('client'));
    return headers;
  }


  logout() { 
    let headers = this.headerToken();
    this.http.delete(this.rootUrl+'/auth/sign_out', { headers: headers })
      .subscribe((response:any) => {
        if (response.success) {
          this.removeLocalToken();
          this.router.navigate(['/sign-in']);
        }
      });
      
  }

  isLoggedIn() { 
    return !this.checkValidateToken() ? false:true;   
  }

  currentUser() {
    return localStorage.getItem('uid');
  }

  getProfile() {
    let headers = this.headerToken();
    return this.http.get(this.rootUrl+'/auth/validate_token', { headers: headers })
      .map(response => {
        return response;
      });
  }

  updateProfle(credentials) {
    let data = {
      "user": {
        "first_name": credentials.firstName,
        "last_name": credentials.lastName,
      }
    }
    let headers = this.headerToken();
    return this.http.patch(this.rootUrl+'/auth', 
      data, { headers: headers })
      .map(response => {
        return response;
      });
  }

}

