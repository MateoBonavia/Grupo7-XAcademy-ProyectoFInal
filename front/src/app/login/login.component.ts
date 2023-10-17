import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login-services.service';
import { Router } from '@angular/router';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;

  constructor(public loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  hiddenEmail = true;
  hiddenPass = true;

  toggleBadgeVisibilityEmail(response: boolean) {
    this.hiddenEmail = response;
  }
  toggleBadgeVisibilityPass(response: boolean) {
    this.hiddenPass = response;
  }

  onSubmit() {
    const email = this.myForm.get('email')?.errors?.['required'];
    const password = this.myForm.get('password')?.errors?.['required'];

    if (email && password) {
      this.toggleBadgeVisibilityEmail(false);
      this.toggleBadgeVisibilityPass(false);
      if (email && password) {
      } else if (email) {
        this.toggleBadgeVisibilityEmail(false);
        this.toggleBadgeVisibilityPass(true);
      } else {
        this.toggleBadgeVisibilityEmail(true);
        this.toggleBadgeVisibilityPass(false);
      }
    } else {
      const result = this.loginService.loginUser(this.myForm).subscribe({
        next: (response: any) => {
          this.router.navigate(['inicio']);
          localStorage.setItem('token', response.token);
        },
        error: (error) => {
          console.log(error);
          this.toggleBadgeVisibilityEmail(false);
          this.toggleBadgeVisibilityPass(false);
        },
      });
    }
  }
}
