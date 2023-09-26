import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: ApiService) {}

  loginUser(form: any){

    const datos = {email: form.value.email, password: form.value.password}
    return this.http.post('login', datos);
     
  }
}
