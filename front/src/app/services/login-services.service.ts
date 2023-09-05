import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginUser(form: any) {
    console.log('User: ', form.value.user);
    console.log('Password: ', form.value.password);
    // this.http.get('').subscribe((data) => {
    //   console.log(data);
    // });
  }
}
