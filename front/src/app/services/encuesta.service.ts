import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class EncuestaService {
  constructor(private http: ApiService) {}

  sendEncuesta(form: any) {
    return this.http.post('form', form);
  }

  getEncuesta() {
    return this.http.get('form');
  }
}
