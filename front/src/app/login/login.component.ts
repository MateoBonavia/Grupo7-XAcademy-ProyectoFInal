import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;

  constructor(public loginService: LoginService) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      user: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit(form: FormGroup) {
    const result = this.loginService.loginUser(form);
    // if (result === true) {
    //   console.log('Sesion iniciada');
    // } else {
    //   console.log('Usuario o contraseña incorecta');
    // }
    console.log(result);
  }
}
