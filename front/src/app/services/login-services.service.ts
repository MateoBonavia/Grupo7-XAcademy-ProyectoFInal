import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  async loginUser(form: any) {
    // console.log('User: ', form.value.user);
    // console.log('Password: ', form.value.password);
    // this.http.get('').subscribe((data) => {
    //   console.log(data);
    // });
    // if (form.value.user === 'Mateo' && form.value.password === '123456') {
    //   return true;
    // } else {
    //   return false;
    // }
    const result = this.http.get('http://localhost:4001/login', form);
    // if (result.token) {
    //   localStorage.setItem('token', result.token);
    //   return result;
    // }
    return result;
  }
}
