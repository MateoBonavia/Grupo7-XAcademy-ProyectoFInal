import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../services/encuesta.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public encuestaService: EncuestaService) {}

  encuestasList: any = [];

  ngOnInit(): void {
    const result = this.encuestaService
      .getEncuesta()
      .subscribe((encuestas: any) => {
        this.encuestasList = encuestas;
        console.log(encuestas);
      });
  }
}
