import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  isSuccessed: boolean;
  constructor(private authService: AuthService) { 
    this.profile = {
      "firstName": "",
      "lastName": "",
      "email": "",
    };
  }

  ngOnInit() {
    this.authService.getProfile()
      .subscribe((result : any) => {
        return this.profile = result.data;
      });
  }

  updateProfile(credentials) {
    this.authService.updateProfle(credentials)
      .subscribe((result : any) => {
        if (result.status === 'success') {
          this.isSuccessed = true;
          this.ngOnInit();
        }
      });
  }

}
