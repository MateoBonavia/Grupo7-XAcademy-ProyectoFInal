import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLogin = () => {
    const result = localStorage.getItem('token') ? true : false;
    return result;
  };
}
