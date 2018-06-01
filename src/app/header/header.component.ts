import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout()
      .subscribe((result : any) => {
        if (result.success) {
          this.authService.removeLocalToken();
          this.router.navigate(['/sign-in']);
        }
      })
      
  }

  isLoggedIn() {
    return this.authService.isLoggedIn()?true:false;
  }

}
