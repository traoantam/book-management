import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from '../sign-up/password.validators';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  invalidRegister: boolean;
  validResgister = false;
  form: FormGroup;

  constructor(
    fb: FormBuilder, 
    private router: Router, 
    private route: ActivatedRoute,
    private authService: AuthService) {
    this.form = fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidators.passwordsShouldMatch
    });
  }

  get firstName() { return this.form.get('firstName'); }
  get lastName() { return this.form.get('lastName'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }

  signUp(credentials) {
    this.authService.register(credentials)
      .subscribe((result : any)=>{
        if (result.body.status === 'success') {
          this.validResgister = true;
          setTimeout(() => {
              this.router.navigate(['/sign-in']);
          }, 1500);
        }
          
      },(err : HttpErrorResponse)=>{
        this.invalidRegister = true;
      });
  }

}
