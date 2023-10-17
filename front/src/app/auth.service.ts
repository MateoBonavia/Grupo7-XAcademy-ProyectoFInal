import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: ApiService) {}

  isLogin(token: any) {
    const result = localStorage.getItem('token') ? true : false;
    return result;
  }
}
