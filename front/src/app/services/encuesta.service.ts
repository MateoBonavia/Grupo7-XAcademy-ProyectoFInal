import { Injectable } from '@angular/core';
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
