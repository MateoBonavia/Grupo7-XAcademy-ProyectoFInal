import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login-services.service';
import { Router } from '@angular/router';

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
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    const result = this.loginService.loginUser(this.myForm).subscribe({
      next: (response) => {
        this.router.navigate(['inicio']);
      },
      error: (error) => {
        this.router.navigate(['login']);
      },
    });
  }
}
