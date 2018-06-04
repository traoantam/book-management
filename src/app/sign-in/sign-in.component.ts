import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  invalidLogin: boolean; 

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn())
      this.router.navigate(['/']);
  }  

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe((result : any)=>{
        localStorage.setItem('uid',result.headers.get('Uid'));
        localStorage.setItem('token',result.headers.get('Access-Token'));
        localStorage.setItem('client',result.headers.get('Client'));
        this.router.navigate(['/']);
      },
      (err : HttpErrorResponse)=>{
        this.invalidLogin = true;
      });
  }

}
