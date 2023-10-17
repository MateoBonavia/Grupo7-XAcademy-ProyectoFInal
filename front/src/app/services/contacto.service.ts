import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  constructor(private http: HttpClient) {}

  sendMessage(form: any) {
    const response = this.http.post(
      'https://formspree.io/f/xwkdazly',
      form.value
    );
    console.log(form.value);
    return response;
  }
}
